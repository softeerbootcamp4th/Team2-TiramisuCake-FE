import './LoginModal.css';
import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import { ChangeEvent, useEffect, useState } from 'react';
import { useLoginContext } from '@/store/context/useLoginContext';
import Modal from '@/components/common/Modal/Modal';
import {
  useMutationCode,
  useMutationCodeVerification,
  useMutationLogin,
} from '@/apis/login/query';
import {
  ConfirmVerificationRequestBody,
  LoginRequestBody,
} from '@/types/Authorization/request';
//import { parseISO, differenceInSeconds } from 'date-fns';
import { validatePhoneNumber } from '@/utils/checkPhoneNumber';
import { useQueryClient } from '@tanstack/react-query';

import { setCookie } from '@/utils/cookie';
interface CloseProps {
  onClose: () => void;
}

const checkbox = 'svg/check-off.svg';
const checked = 'svg/check-on.svg';

const LoginModal = ({ onClose }: CloseProps) => {
  const codeMutation = useMutationCode();
  const codeVerificationMutation = useMutationCodeVerification();
  const loginMutation = useMutationLogin();
  const [timer, setTimer] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [name, setName] = useState('');
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [codeVerified, setCodeVerified] = useState(true);
  const [code, setCode] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [allValid, setAllValid] = useState(false);
  const queryClient = useQueryClient();
  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, ''); // 숫자만 추출
    setPhoneNumber(rawValue);
    setValidPhoneNumber(validatePhoneNumber(rawValue));
  };

  const handlePrivacyConsentChange = () => {
    setPrivacyConsent(!privacyConsent);
  };

  const handleMarketingConsentChange = () => {
    setMarketingConsent(!marketingConsent);
  };

  const { setIsLogined } = useLoginContext();

  const handleNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleCodeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleSendAuthCode = async (phoneNumber: string) => {
    codeMutation.mutate(phoneNumber, {
      onSuccess: (response) => {
        console.log('인증번호 전송 성공:', response);
        if (response.isSuccess && response.result) {
          setTimer(response.result.timeLimit);

          const interval = setInterval(() => {
            setTimer((prevTimer) => {
              if (prevTimer <= 1) {
                clearInterval(interval);
                return 0;
              }
              return prevTimer - 1;
            });
          }, 1000);
        }
      },
      onError: (error: Error) => {
        console.error('인증번호 전송 실패:', error);
      },
    });
  };

  const handleVerification = async (body: ConfirmVerificationRequestBody) => {
    codeVerificationMutation.mutate(body, {
      onSuccess: (response) => {
        if (response.isSuccess) {
          setCodeVerified(true);
          setTimer(0);
        } else {
          console.error('잘못된 인증번호입니다. 다시 입력해주세요');
        }
      },
      onError: (error) => {
        console.error('인증 코드 전송 실패', error);
      },
    });
  };

  const handleLogin = (body: LoginRequestBody) => {
    loginMutation.mutate(body, {
      onSuccess: (response) => {
        console.log(response);

        if (response.isSuccess && response.result) {
          //const expiresAt = parseISO(response.result.expiredTime);
          //const maxAge = differenceInSeconds(expiresAt, new Date());

          setCookie('accessToken', response.result.accessToken, {
            path: '/',
            maxAge: 104800,
            secure: true,
            sameSite: 'strict',
          });

          setCookie('refreshToken', response.result.refreshToken, {
            path: '/',
            maxAge: 604800,
            secure: true,
            sameSite: 'strict',
          });
          queryClient.invalidateQueries({
            queryKey: ['sharedUrl', response.result.accessToken],
          });

          setIsLogined(true);
          onClose();
        } else {
          console.error('로그인 실패 : ', response.message || 'Unknown error');
        }
      },
      onError: (error) => {
        console.error('로그인 실패 : ', error);
      },
    });
  };

  useEffect(() => {
    setMinutes(Math.floor(timer / 60));
    setSeconds(timer % 60);
  }, [timer]);

  useEffect(() => {
    if (privacyConsent && codeVerified) {
      setAllValid(true);
    } else {
      setAllValid(false);
    }
  }, [privacyConsent, codeVerified]);

  return (
    <Modal handleClose={onClose}>
      <div className='flex p-9 flex-col justify-center items-center gap-6'>
        <div className='self-stretch gap-4 text-center'>
          <div className='font-bold text-h-s py-2'>전화번호 인증</div>
          <div className='text-center font-normal text-gray-600 font-pretend'>
            The new IONIQ 5 신차 추첨 이벤트 참여와
            <br /> 경품 지급을 위한 전화번호 인증입니다.
          </div>
          <div className='commonClass'>
            <div className='textCommonClass'>성명</div>
            <Input
              type='active'
              inputText='이름을 입력해주세요'
              buttonText=''
              required
              value={name}
              onChange={(e) => handleNameInputChange(e)}
            />
          </div>
          <div className={`mt-6 commonClass`}>
            <div className='textCommonClass'>전화번호 입력</div>
            <Input
              type='active'
              inputText='전화번호를 입력해주세요'
              buttonText='인증번호 전송'
              required
              showButton
              isActivated={validPhoneNumber}
              value={phoneNumber}
              onChange={(e) => handlePhoneNumberChange(e)}
              handleButtonClick={() => handleSendAuthCode(phoneNumber)}
            />
          </div>
          <div className={`mt-6 commonClass`}>
            <div className='flex flex-row items-center w-full'>
              <div className='textCommonClass'>인증번호 입력</div>
              <div className='ml-auto text-red text-b-s'>
                {timer > 0 && (
                  <p>
                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}초 남음
                  </p>
                )}
              </div>
            </div>
            <Input
              type={codeVerified ? 'disabled' : 'active'}
              inputText='인증번호를 입력해주세요'
              buttonText={codeVerified ? '인증완료' : '전송'}
              showButton
              required
              value={code}
              onChange={(e) => handleCodeInputChange(e)}
              handleButtonClick={() =>
                handleVerification({
                  phoneNumber: phoneNumber,
                  verificationCode: code,
                })
              }
            />
          </div>
          <div className='mt-4 my-2 flex flex-row items-start'>
            <img
              className='cursor-pointer'
              src={privacyConsent ? checked : checkbox}
              onClick={handlePrivacyConsentChange}
            />
            <div className='py-1 ml-2 text-gray-800 text-b-s'>
              개인정보 수집 이용 동의 <span className=' text-red'>(필수)</span>
            </div>
          </div>
          <div className='mb-2 flex flex-row items-start'>
            <img
              className='cursor-pointer'
              src={marketingConsent ? checked : checkbox}
              onClick={handleMarketingConsentChange}
            />
            <div className='px-2 py-1 text-gray-800 text-b-s items-center'>
              마케팅 활용 및 광고 수신 동의
            </div>
          </div>
          <div className='mt-4'>
            <Button
              type='bigRound'
              text='완료'
              handleClick={() =>
                handleLogin({
                  name: name,
                  phoneNumber: phoneNumber,
                  hasCodeVerified: codeVerified,
                  privacyConsent: privacyConsent,
                  marketingConsent: marketingConsent,
                })
              }
              isActive={allValid}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default LoginModal;

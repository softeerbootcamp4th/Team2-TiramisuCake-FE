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
  useMutationTestCode,
} from '@/apis/login/query';
import {
  ConfirmVerificationRequestBody,
  LoginRequestBody,
} from '@/types/Authorization/type';
import { ErrorCode, ERROR_CODES, ERROR_MESSAGES } from '@/constants/error';
import { parseISO, differenceInSeconds } from 'date-fns';
import { validatePhoneNumber } from '@/utils/checkPhoneNumber';
import { checkAuthCode } from '@/utils/checkAuthCode';
import { useQueryClient } from '@tanstack/react-query';

import { setCookie } from '@/utils/cookie';
interface CloseProps {
  onClose: () => void;
}

const checkbox = 'svg/check-off.svg';
const checked = 'svg/check-on.svg';

const LoginModal = ({ onClose }: CloseProps) => {
  //  const codeMutation = useMutationCode();
  const codeMutation = useMutationTestCode();
  const codeVerificationMutation = useMutationCodeVerification();
  const loginMutation = useMutationLogin();
  const [timer, setTimer] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [validCode, setValidCode] = useState(false);
  const [canSendCode, setCanSendCode] = useState(true);
  const [codeVerified, setCodeVerified] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  const [allValid, setAllValid] = useState(false);

  const [codeErrorMsg, setCodeErrorMsg] = useState<string>('');
  const [validateErrorMsg, setValidateErrorMsg] = useState<string>('');

  const queryClient = useQueryClient();

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '').slice(0, 11); // 숫자만 추출
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
    e.preventDefault();
    setName(e.target.value);
  };
  const handleCodeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredValue = e.target.value.slice(0, 6); // 6자리까지 제한
    setValidCode(checkAuthCode(filteredValue));
    setCode(filteredValue);
  };

  const handleSendAuthCode = async (phoneNumber: string) => {
    if (!codeVerified) {
      codeMutation.mutate(phoneNumber, {
        onSuccess: (response) => {
          console.log('인증번호 전송 성공:', response);
          if (response.isSuccess && response.result) {
            setTimer(response.result.timeLimit);
            setValidateErrorMsg('');
            const interval = setInterval(() => {
              setTimer((prevTimer) => {
                if (prevTimer <= 1) {
                  clearInterval(interval);
                  return 0;
                }
                return prevTimer - 1;
              });
            }, 1000);
          } else if (!response.isSuccess && response.code in ERROR_MESSAGES) {
            //todo : abort controller로 api 요청 완전 차단
            setCodeErrorMsg('');
            setTimer(0);
            setCanSendCode(false);
            alert(ERROR_MESSAGES[response.code as ErrorCode]);
          }
        },
      });
    }
  };

  const handleVerification = async (body: ConfirmVerificationRequestBody) => {
    codeVerificationMutation.mutate(body, {
      onSuccess: (response) => {
        if (response.isSuccess) {
          setCodeErrorMsg('');
          setValidateErrorMsg('');
          setCodeVerified(true);
          setTimer(0);
        } else {
          console.log(response);

          if (response.code in ERROR_MESSAGES) {
            const errorMessage = ERROR_MESSAGES[response.code as ErrorCode];

            if (response.code === ERROR_CODES.TIMEOUT) {
              setCodeErrorMsg(errorMessage);
            } else if (response.code !== ERROR_CODES.RESEND_REQUIRED) {
              setValidateErrorMsg(errorMessage);
            } else if (response.code === ERROR_CODES.RESEND_REQUIRED) {
              setValidateErrorMsg(errorMessage);
              setTimer(0);
              setCodeErrorMsg('');
            }
          }
        }
      },
    });
  };

  const handleLogin = (body: LoginRequestBody) => {
    loginMutation.mutate(body, {
      onSuccess: (response) => {
        console.log(response);

        if (response.isSuccess && response.result) {
          setCodeErrorMsg('');
          setValidateErrorMsg('');
          const expiresAt = parseISO(response.result.expiredTime);
          const maxAge = differenceInSeconds(expiresAt, new Date());

          setCookie('accessToken', response.result.accessToken, {
            path: '/',
            maxAge: maxAge,
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
        } else if (!response.isSuccess && response.code in ERROR_MESSAGES) {
          alert(ERROR_MESSAGES[response.code as ErrorCode]);
        }
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
              onChange={handleNameInputChange}
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
              isActivated={validPhoneNumber && canSendCode}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              handleButtonClick={() => handleSendAuthCode(phoneNumber)}
            />
          </div>
          <div className={`mt-6 commonClass`}>
            <div className='flex flex-row items-center w-full'>
              <div className='textCommonClass'>인증번호 입력</div>
              <div className='ml-auto text-red text-b-s'>
                {timer === 0 && !codeVerified ? (
                  <p>{codeErrorMsg}</p>
                ) : (
                  timer > 0 && (
                    <p>
                      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}초 남음
                    </p>
                  )
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
              onChange={handleCodeInputChange}
              isActivated={validCode && !codeVerified}
              handleButtonClick={() =>
                handleVerification({
                  phoneNumber: phoneNumber,
                  verificationCode: code,
                })
              }
            />
          </div>
          {validateErrorMsg && (
            <div className='text-left text-red text-b-s mt-2'>
              {validateErrorMsg}
            </div>
          )}
          <div className='mt-6 my-2 flex flex-row items-start'>
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
              마케팅 활용 및 광고 수신 동의 (선택)
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
              isActive={allValid && name.trim() !== ''}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default LoginModal;

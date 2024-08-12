import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import { useEffect, useState } from 'react';
import { useLoginContext } from '@/store/context/useLoginContext';
import Modal from '@/components/common/Modal/Modal';
import { sendAuthCode, confirmVerification, login } from '@/apis/authorization';
import useLoginModalStateContext from '@/hooks/useLoginModalStateContext';
import useLoginModalDispatchContext from '@/hooks/useLoginModalDispatchContext';
import { LOGIN_ACTION } from '@/store/types/loginModalTypes';
import './LoginModal.css';
import {
  confirmVerificationRequestBody,
  loginRequestBody,
} from '@/types/authorization/request';
import { useCookies } from 'react-cookie';
import { parseISO, differenceInSeconds } from 'date-fns';

interface CloseProps {
  onClose: () => void;
}

const checkbox = 'svg/check-off.svg';
const checked = 'svg/check-on.svg';

const LoginModal = ({ onClose }: CloseProps) => {
  const [timer, setTimer] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [cookies, setCookie] = useCookies(['accessToken', 'refreshToken']);

  const { setIsLogined } = useLoginContext();
  const state = useLoginModalStateContext();
  const dispatch = useLoginModalDispatchContext();

  const handleCheck = () => {
    dispatch({ type: LOGIN_ACTION.SET_CHECKED, payload: !state.isChecked });
  };

  const handleMarketingCheck = () => {
    dispatch({
      type: LOGIN_ACTION.SET_MARKETING_CHECKED,
      payload: !state.marketingChecked,
    });
  };

  const handleSendAuthCode = async (phoneNumber: string) => {
    try {
      const response = await sendAuthCode(phoneNumber);
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
    } catch (error) {
      console.error('인증번호 전송 실패:', error);
    }
  };
  const handleVerification = async (body: confirmVerificationRequestBody) => {
    try {
      const response = await confirmVerification(body);
      if (response.isSuccess) {
        dispatch({ type: LOGIN_ACTION.SET_VERIFIED, payload: true });
        setTimer(0);
      } else {
        console.error('잘못된 인증번호입니다. 다시 입력해주세요');
      }
    } catch (error) {
      console.error('인증 코드 전송 실패', error);
    }
  };

  const handleLogin = async (body: loginRequestBody) => {
    try {
      const response = await login(body);
      if (!response) {
        throw new Error('Empty response from server');
      }
      if (response.isSuccess && response.result) {
        const expiresAt = parseISO(response.result.expiredTime);
        const maxAge = differenceInSeconds(expiresAt, new Date());

        setCookie('accessToken', response.result.accessToken, {
          path: '/',
          maxAge: maxAge,
          secure: true, // HTTPS에서만 사용
          sameSite: 'strict',
        });

        setCookie('refreshToken', response.result.refreshToken, {
          path: '/',
          maxAge: 604800, // 7일 동안 유효
          secure: true,
          sameSite: 'strict',
        });

        setIsLogined(true);
        onClose();
      } else {
        console.error('로그인 실패 : ', response.message || 'Unknown error');
      }
    } catch (error) {
      console.error('로그인 실패 : ', error);
    }
  };

  useEffect(() => {
    setMinutes(Math.floor(timer / 60));
    setSeconds(timer % 60);
  }, [timer]);

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
              value={state.name}
              onChange={(e) =>
                dispatch({
                  type: LOGIN_ACTION.SET_NAME,
                  payload: e.target.value,
                })
              }
            />
          </div>
          <div className={`mt-6 commonClass`}>
            <div className='textCommonClass'>전화번호 입력</div>
            <Input
              type='active'
              inputText='전화번호를 입력해주세요'
              buttonText='인증번호 전송'
              required
              isPhone
              showButton
              value={state.phoneNumber}
              onChange={(e) =>
                dispatch({
                  type: LOGIN_ACTION.SET_PHONE_NUMBER,
                  payload: e.target.value,
                })
              }
              handleButtonClick={() => handleSendAuthCode(state.phoneNumber)}
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
              type={state.isVerified ? 'disabled' : 'active'}
              inputText='인증번호를 입력해주세요'
              buttonText={state.isVerified ? '인증완료' : '전송'}
              showButton
              required
              value={state.verificationCode}
              onChange={(e) =>
                dispatch({
                  type: LOGIN_ACTION.SET_VERIFICATION_CODE,
                  payload: e.target.value,
                })
              }
              handleButtonClick={() =>
                handleVerification({
                  phoneNumber: state.phoneNumber,
                  verificationCode: state.verificationCode,
                })
              }
            />
          </div>
          <div className='mt-4 my-2 flex flex-row items-start'>
            <img
              className='cursor-pointer'
              src={state.isChecked ? checked : checkbox}
              onClick={handleCheck}
            />
            <div className='py-1 ml-2 text-gray-800 text-b-s'>
              개인정보 수집 이용 동의 <span className=' text-red'>(필수)</span>
            </div>
          </div>
          <div className='mb-2 flex flex-row items-start'>
            <img
              className='cursor-pointer'
              src={state.marketingChecked ? checked : checkbox}
              onClick={handleMarketingCheck}
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
                  name: state.name,
                  phoneNumber: state.phoneNumber,
                  hasCodeVerified: state.isVerified,
                  privacyConsent: state.isChecked,
                  marketingConsent: state.marketingChecked,
                })
              }
              isActive={state.allValid}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default LoginModal;

import './LoginModal.css';
import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';
import { memo } from 'react';
import Modal from '@/components/common/Modal/Modal';
import { useLoginLogic } from '@/hooks/MainPage/useLoginLogic';
import { useModalContext } from '@/store/context/useModalContext';
const checkbox = 'svg/check-off.svg';
const checked = 'svg/check-on.svg';

const LoginModal = () => {
  const { isOpen, setIsOpen } = useModalContext();

  const onClose = () => {
    setIsOpen(!isOpen);
  };

  const {
    time,
    name,
    code,
    phoneNumber,
    validPhoneNumber,
    validCode,
    canSendCode,
    codeVerified,
    privacyConsent,
    marketingConsent,
    allValid,
    codeErrorMsg,
    validateErrorMsg,
    handleNameInputChange,
    handlePhoneNumberChange,
    handlePrivacyConsentChange,
    handleMarketingConsentChange,
    handleCodeInputChange,
    handleSendAuthCode,
    handleVerification,
    handleLogin,
  } = useLoginLogic(onClose);

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
                {time.timer === 0 && !codeVerified ? (
                  <p>{codeErrorMsg}</p>
                ) : (
                  time.timer > 0 && (
                    <p>
                      {time.minutes}:
                      {time.seconds < 10 ? `0${time.seconds}` : time.seconds}초
                      남음
                    </p>
                  )
                )}
              </div>
            </div>
            <Input
              type={codeVerified ? 'disabled' : 'active'}
              inputText='인증번호를 입력해주세요'
              buttonText={codeVerified ? '인증완료' : '인증'}
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
              alt='checkbox'
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
              alt='checkbox'
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

export default memo(LoginModal);

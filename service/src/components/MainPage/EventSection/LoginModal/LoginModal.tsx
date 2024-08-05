import Button from '@/components/common/Button/Button';
import Input from '@/components/common/Input/Input';

interface CloseProps {
  onClose: () => void;
}

const checkAuthorization = () => {
  console.log('goto');
};

const checkbox = 'svg/check-off.svg';

const LoginModal = ({ onClose }: CloseProps) => {
  const commonClass = 'flex flex-col items-start gap-2 self-stretch';
  const textCommonClass = 'text-[0.875rem] text-gray-600 text-left';

  return (
    <div className='flex w-[26rem] flex-col items-end gap-4'>
      <img
        src='/svg/closeIcon.svg'
        onClick={onClose}
        className='cursor-pointer'
      />
      <div className='flex p-9 flex-col justify-center items-center gap-6 bg-white'>
        <div className='self-stretch gap-4 text-center'>
          <div className='font-bold text-h-s py-2'>전화번호 인증</div>
          <div className='text-center font-normal text-gray-600 font-pretend'>
            The new IONIQ 5 신차 추첨 이벤트 참여와
            <br /> 경품 지급을 위한 전화번호 인증입니다.
          </div>
          <div className={commonClass}>
            <div className={textCommonClass}> 성명</div>
            <Input
              type='active'
              inputText='이름을 입력해주세요'
              buttonText=''
              required
              handleClick={checkAuthorization}
            />
          </div>
          <div className={`mt-6 ${commonClass}`}>
            <div className={textCommonClass}>전화번호 입력</div>
            <Input
              type='active'
              inputText='전화번호를 입력해주세요'
              buttonText='인증번호 전송'
              required
              showButton
              handleClick={checkAuthorization}
            />
          </div>
          <div className={`mt-6 ${commonClass}`}>
            <div className={textCommonClass}>인증번호 입력</div>
            <Input
              type='active'
              inputText='인증번호를 입력해주세요'
              buttonText='전송'
              showButton
              handleClick={() => console.log('입력중')}
            />
          </div>
          <div className='mt-4 my-2 flex flex-row items-start'>
            <img src={checkbox} />
            <div className='py-1 ml-2 text-gray-800 text-b-s'>
              개인정보 수집 이용 동의 <span className=' text-red'>(필수)</span>
            </div>
          </div>
          <div className='mb-2 flex flex-row items-start'>
            <img src={checkbox} />
            <div className='px-2 py-1 text-gray-800 text-b-s items-center'>
              마케팅 활용 및 광고 수신 동의
            </div>
          </div>
          <div className='mt-4'>
            <Button
              type='bigRound'
              text='완료'
              handleClick={checkAuthorization}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginModal;

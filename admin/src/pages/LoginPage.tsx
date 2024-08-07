import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import { ROUTER_PATH } from '@/lib/constants';
import { ChangeEvent, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // const navigate = useNavigate();

  const handleIdInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePWInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPW = e.target.value;
    const regx = /^[a-z0-9]*$/;

    if (regx.test(newPW)) {
      setPassword(newPW);
      setPasswordError('');
    } else {
      setPasswordError('비밀번호는 영어 소문자와 숫자의 조합만 가능합니다.');
    }
  };

  const handleBtnClick = () => {
    console.log(id, password);
  };

  const handleIdClearClick = () => {
    setId('');
  };

  const handlePWClearClick = () => {
    setPassword('');
    setPasswordError('');
  };

  //todo 서버 연동시 처리

  // const onSuccess = () => {
  //   navigate(ROUTER_PATH.MAIN);
  // }

  // const onError = () => {
  //   setId('');
  //   setPassword('');
  // }
  return (
    <div className='w-full h-screen flex justify-center items-center '>
      <div className='flex flex-col gap-9 items-center justify-evenly w-[560px] h-[564px] py-7 px-4 bg-[#F3F5F7]'>
        <div className='text-center'>
          <h1 className=' text-4xl font-bold'>관리자 로그인</h1>
          <p className='mt-2.5'>[The new IONIQ 5와 그린라이트] 이벤트 관리</p>
          <p className='text-gray-700'>
            관리자 기능은 로그인 후 이용 가능합니다.
          </p>
        </div>
        <div className='flex flex-col gap-4 w-[387px]'>
          <div className='flex flex-col gap-1'>
            <span>아이디</span>
            <div className='relative'>
              <Input onChange={handleIdInputChange} value={id} />
              <img
                src='/svg/close.svg'
                onClick={handleIdClearClick}
                className='absolute top-[35%] right-2 cursor-pointer'
              />
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <span>비밀번호</span>
            <div className='relative'>
              <Input onChange={handlePWInputChange} value={password} />
              <img
                src='/svg/close.svg'
                onClick={handlePWClearClick}
                className='absolute top-[35%] right-2 cursor-pointer'
              />
            </div>
            <div className='text-red mt-1 text-sm'>{passwordError}</div>
          </div>
          <Button onClick={handleBtnClick}>로그인</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

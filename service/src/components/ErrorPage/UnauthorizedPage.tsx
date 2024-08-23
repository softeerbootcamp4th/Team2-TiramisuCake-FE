import { ROUTER_PATH } from '@/constants/lib/constants';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UnAuthorizedPage = () => {
  const navigate = useNavigate();
  const [second, setSecond] = useState<number>(3);

  useEffect(() => {
    const countdown = setInterval(() => {
      setSecond((prevSecond) => prevSecond - 1);
    }, 1000);

    if (second === 0) {
      clearInterval(countdown);
      navigate(ROUTER_PATH.MAIN);
    }

    return () => clearInterval(countdown);
  }, [second, navigate]);

  return (
    <div className='flex flex-col font-semibold justify-center items-center text-center min-w-screen min-h-screen text-hyundai gap-10'>
      <p className='text-h-s whitespace-pre-wrap'>로그인 후 이용해주세요.</p>
      <p className='text-h-s whitespace-pre-wrap'>
        {second}초 뒤에 메인 페이지로 돌아갑니다.
      </p>
    </div>
  );
};

export default UnAuthorizedPage;

import { ROUTER_PATH } from '@/constants/lib/constants';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorBoundaryPage = () => {
  const navigate = useNavigate();

  const goToMainPage = useCallback(() => {
    navigate(ROUTER_PATH.MAIN);
  }, [navigate]);
  return (
    <div className='flex flex-col font-semibold justify-center items-center text-center min-w-screen min-h-screen text-hyundai gap-10'>
      <p className='text-h-s whitespace-pre-wrap'>
        문제가 발생했습니다. 잠시 후 시도해주세요
      </p>
      <button
        className='rounded-xl bg-primary text-white p-3'
        onClick={goToMainPage}
      >
        메인 페이지로 돌아가기
      </button>
    </div>
  );
};

export default ErrorBoundaryPage;

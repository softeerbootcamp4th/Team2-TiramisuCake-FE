import { useNavigate } from 'react-router-dom';
import { ROUTER_PATH } from '@/constants/lib/constants';
import { useCallback } from 'react';

interface ErrorPageProps {
  title: string;
  type?: ErrorType;
}

type ErrorType = 'Alert' | 'Default';

const ErrorPage = ({ title, type = 'Default' }: ErrorPageProps) => {
  const navigate = useNavigate();

  const goToMainPage = useCallback(() => {
    navigate(ROUTER_PATH.MAIN);
  }, [navigate]);

  return (
    <div className='flex flex-col font-semibold justify-center items-center text-center min-w-screen min-h-screen text-hyundai gap-10'>
      {type === 'Alert' && (
        <img className='w-24 h-24' src='/svg/경고.svg' alt='Alert Icon' />
      )}
      <p className='text-h-s whitespace-pre-wrap'>{title}</p>
      <button
        className='rounded-xl bg-primary text-white p-3'
        onClick={goToMainPage}
      >
        메인 페이지로 돌아가기
      </button>
    </div>
  );
};

export default ErrorPage;

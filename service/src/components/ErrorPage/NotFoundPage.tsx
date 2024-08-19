import { useNavigate } from 'react-router-dom';
import { ROUTER_PATH } from '@/constants/lib/constants';

const errorSvg = '/svg/경고.svg';

const NotFoundPage = () => {
  const navigator = useNavigate();

  const goToMainPage = () => {
    navigator(ROUTER_PATH.MAIN);
  };
  return (
    <div className='flex flex-col font-semibold snap-y justify-center items-center text-center min-w-screen min-h-screen text-hyundai gap-10'>
      <img className='w-24 h-24' src={errorSvg} />
      <div className='text-h-s'>해당 페이지를 찾을 수 없습니다.</div>
      <button
        className='rounded-xl bg-primary text-white p-3'
        onClick={goToMainPage}
      >
        메인 페이지로 돌아가기
      </button>
    </div>
  );
};

export default NotFoundPage;

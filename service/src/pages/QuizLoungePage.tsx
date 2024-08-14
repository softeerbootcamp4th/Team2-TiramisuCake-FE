import ExitModal from '@/components/common/Modal/ExitModal/ExitModal';
import QuizContainer from '@/components/QuizLounge/QuizContainer';
import QuizFooter from '@/components/QuizLounge/QuizFooter';
import QuizTitle from '@/components/QuizLounge/QuizTitle';
import { useEffect, useState } from 'react';
import { useBlocker } from 'react-router-dom';

function QuizLoungePage() {
  const [isGameEnded, setIsGameEnded] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const data = {
    title:
      '디지털 센터 미러 전용 카메라를 통해 \n 보다 선명하게 후방을 확인할 수 있다',
    startIndex: 0,
    endIndex: 9,
  };

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      !isGameEnded && currentLocation.pathname !== nextLocation.pathname
  );
  const answer = data.title.slice(data.startIndex, data.endIndex).split('');
  const slicedQuizTitle = data.title.slice(data.endIndex);

  return (
    <div
      className='min-w-screen min-h-screen bg-center bg-no-repeat bg-cover flex flex-col items-center'
      style={{ backgroundImage: `url('/images/fcfs_bg.webp')` }}
    >
      <QuizTitle quizTitle={slicedQuizTitle} answer={answer} />
      <QuizContainer
        answer={answer}
        isGameEnded={isGameEnded}
        setIsGamedEnded={setIsGameEnded}
      />
      <QuizFooter />
      {blocker.state === 'blocked' && (
        <ExitModal
          handleClose={() => blocker.reset()}
          handleCancel={() => blocker.reset()}
          handleConfirm={() => blocker.proceed()}
        />
      )}
    </div>
  );
}
export default QuizLoungePage;

import QuizContainer from '@/components/QuizLounge/QuizContainer';
import QuizFooter from '@/components/QuizLounge/QuizFooter';
import QuizTitle from '@/components/QuizLounge/QuizTitle';
import { useEffect } from 'react';

function QuizLoungePage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const data = {
    title:
      '디지털 센터 미러 전용 카메라를 통해 \n 보다 선명하게 후방을 확인할 수 있다',
    startIndex: 0,
    endIndex: 9,
  };

  const answer = data.title.slice(data.startIndex, data.endIndex).split('');
  const slicedQuizTitle = data.title.slice(data.endIndex);

  return (
    <div
      className='min-w-screen min-h-screen bg-center bg-no-repeat bg-cover flex flex-col items-center'
      style={{ backgroundImage: `url('/svg/quizBg.svg')` }}
    >
      <QuizTitle quizTitle={slicedQuizTitle} answer={answer} />
      <QuizContainer answer={answer} />
      <QuizFooter />
    </div>
  );
}
export default QuizLoungePage;

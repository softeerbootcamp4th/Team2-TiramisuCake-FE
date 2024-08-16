import {
  useQueryGetFCFSEvent,
  useQueryGetTutorialFCFSEvent,
} from '@/apis/quizLounge/query';
import ExitModal from '@/components/common/Modal/ExitModal/ExitModal';
import QuizContainer from '@/components/QuizLounge/QuizContainer';
import QuizFooter from '@/components/QuizLounge/QuizFooter';
import QuizTitle from '@/components/QuizLounge/QuizTitle';
import { useTabContext } from '@/store/context/useTabContext';
import { useEffect, useMemo, useState } from 'react';
import { useBlocker, useSearchParams } from 'react-router-dom';

function QuizLoungePage() {
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [searchParams] = useSearchParams();
  const { setActiveTab } = useTabContext();

  const mode = searchParams.get('mode');

  const { data, isLoading } =
    mode === 'tutorial'
      ? useQueryGetTutorialFCFSEvent()
      : useQueryGetFCFSEvent();

  console.log(data);

  useEffect(() => {
    window.scroll(0, 0);
    setActiveTab('quiz');
  }, []);

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      !isGameEnded && currentLocation.pathname !== nextLocation.pathname
  );

  const answer = useMemo(() => data?.result.answerWord.split(''), [data]);

  const slicedQuizTitle: string[] = [
    data?.result.answerSentence.slice(0, data?.result.startIndex),
    data?.result.answerSentence.slice(data?.result.endIndex + 1),
  ];

  console.log(slicedQuizTitle);

  if (isLoading) return <>Loading...</>;

  return (
    <div
      className='min-w-screen min-h-screen bg-center bg-no-repeat bg-cover flex flex-col items-center'
      style={{ backgroundImage: `url('/images/fcfs_bg.webp')` }}
    >
      <QuizTitle quizTitle={slicedQuizTitle} answer={answer} />
      <QuizContainer
        mode={mode as string}
        answer={answer}
        isGameEnded={isGameEnded}
        setIsGamedEnded={setIsGameEnded}
      />
      <QuizFooter mode={mode as string} />
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

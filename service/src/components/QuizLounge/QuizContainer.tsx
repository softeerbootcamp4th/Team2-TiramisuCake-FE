import shuffleArray from '@/utils/shuffleArray';
import TextCard from './TextCard';

interface QuizContainerProps {
  answer: string[];
}

const QuizContainer = ({ answer }: QuizContainerProps) => {
  const filteredAnswer = answer.filter((char) => char !== ' ');
  const shuffleAnswer = shuffleArray(filteredAnswer);

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // 각 문자의 수평 위치를 계산하는 변수
  let position = -41;

  return (
    <div>
      <div className='flex gap-3 mt-12'>
        {answer.map((char, index) =>
          char !== ' ' ? (
            <TextCard key={index} type='empty' />
          ) : (
            <div key={index} className='w-4' />
          )
        )}
      </div>
      <div className='mt-[3.8rem] h-[178px] relative w-full'>
        {shuffleAnswer.map((char, index) => {
          const topPosition = getRandomInt(0, 100); // 수직 위치는 랜덤
          const leftPosition = position; // 수평 위치는 증가
          position += 117; // 각 문자 간의 간격을 50px로 설정 (필요에 따라 조정 가능)
          return (
            <div
              key={index}
              className='absolute'
              style={{ top: `${topPosition}%`, left: `${leftPosition}px` }}
            >
              <TextCard type='answer' answerChar={char} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizContainer;

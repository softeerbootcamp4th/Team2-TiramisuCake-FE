import { useState, useRef, useEffect } from 'react';
import { motion, PanInfo } from 'framer-motion';
import shuffleArray from '@/utils/shuffleArray';
import TextCard from './TextCard';

interface QuizContainerProps {
  answer: string[];
}

const QuizContainer = ({ answer }: QuizContainerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const filteredAnswer = answer.filter((char) => char !== ' ');

  const [shuffleAnswer, setShuffleAnswer] = useState<string[]>([]);
  const [positions, setPositions] = useState<{ top: number; left: number }[]>(
    []
  );
  const [correctPositions, setCorrectPositions] = useState<boolean[]>(
    Array(answer.length).fill(false)
  );

  useEffect(() => {
    const shuffled = shuffleArray([...filteredAnswer]);
    setShuffleAnswer(shuffled);

    const initialPositions = shuffled.map((_, index) => ({
      top: Math.random() * 100,
      left: index * 117,
    }));
    setPositions(initialPositions);
  }, [answer]);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
    index: number
  ) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const droppedX = info.point.x - containerRect.left;
    const droppedIndex = Math.round(droppedX / 117);

    // 드롭된 위치가 유효한지 확인
    if (droppedIndex >= 0 && droppedIndex < answer.length) {
      const isCorrectPosition =
        filteredAnswer[droppedIndex] === shuffleAnswer[index];
      console.log(
        isCorrectPosition,
        answer[droppedIndex],
        shuffleAnswer[index]
      );

      if (isCorrectPosition) {
        // 정답 위치라면 correctPositions 배열을 업데이트합니다.
        setCorrectPositions((prev) =>
          prev.map((pos, i) => (i === index ? true : pos))
        );

        const answerElement =
          document.querySelectorAll('.answer')[droppedIndex];
        console.log(answerElement);
        const answerRect = answerElement?.getBoundingClientRect();

        if (answerRect) {
          console.log(answerRect.top, answerRect.left);
          setPositions((prev) =>
            prev.map((pos, i) =>
              i === index
                ? {
                    top: answerRect.top - containerRect.top,
                    left: answerRect.left - containerRect.left,
                  }
                : pos
            )
          );
        }
        // 정답 위치에 고정
      } else {
        // 정답 위치가 아니라면 원래 위치로 돌아갑니다.
        setPositions((prev) => [...prev]);
      }
    } else {
      // 정답 위치가 유효하지 않으면 원래 위치로 돌아갑니다.
      setPositions((prev) => [...prev]);
    }
  };

  return (
    <div>
      <div className='flex gap-3 mt-12'>
        {answer.map((char, index) =>
          char !== ' ' ? (
            <div key={index} className='answer'>
              <TextCard type='empty' />
            </div>
          ) : (
            <div key={index} className='w-4' />
          )
        )}
      </div>
      <div ref={containerRef} className='mt-[3.8rem] h-[178px] relative w-full'>
        {shuffleAnswer.map((char, index) => {
          const isCorrect = correctPositions[index];
          const positionStyle = isCorrect
            ? {
                top: `${positions[index].top}px`,
                left: `${positions[index].left}px`,
                transform: 'none',
              } // 정답 위치에 고정
            : {
                top: `${positions[index].top}px`,
                left: `${positions[index].left}px`,
              };

          return (
            <motion.div
              key={index}
              className='absolute'
              style={positionStyle}
              drag={isCorrect ? false : true}
              onDragEnd={(event, info) => handleDragEnd(event, info, index)}
              animate={positionStyle}
              //transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <TextCard type='answer' answerChar={char} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizContainer;

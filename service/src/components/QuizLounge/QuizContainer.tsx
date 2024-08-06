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

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [initialPositions, setInitialPositions] = useState<
    { top: number; left: number }[]
  >([]);
  const [resetTransform, setResetTransform] = useState<number | null>(null);

  useEffect(() => {
    const shuffled = shuffleArray([...filteredAnswer]);
    setShuffleAnswer(shuffled);

    const initialPositions = shuffled.map((_, index) => ({
      top: Math.random() * 100,
      left: index * 117,
    }));
    setPositions(initialPositions);
    setInitialPositions(initialPositions);
  }, [answer]);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
    index: number
  ) => {
    if (!containerRef.current) return;
    setIsDragging(false);

    const containerRect = containerRef.current.getBoundingClientRect();
    const droppedX = info.point.x - containerRect.left;
    const droppedIndex = Math.round(droppedX / 117);

    // 드롭된 위치가 유효한지 확인
    if (droppedIndex >= 0 && droppedIndex < answer.length) {
      const isCorrectPosition =
        filteredAnswer[droppedIndex] === shuffleAnswer[index];
      console.log(
        isCorrectPosition,
        filteredAnswer[droppedIndex],
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
          const top = answerRect.top - containerRect.top;
          const left = answerRect.left - containerRect.left;
          setPositions((prev) =>
            prev.map((pos, i) =>
              i === index
                ? {
                    top,
                    left,
                  }
                : pos
            )
          );
          // 바로 이동하도록 애니메이션 설정
          setTimeout(() => {
            setPositions((prev) =>
              prev.map((pos, i) => (i === index ? { top, left } : pos))
            );
          }, 0);
        }
      } else {
        console.log('hihi', initialPositions[index]);
        setResetTransform(index);
      }
    } else {
      console.log('helloooo');
      setResetTransform(index);
    }
  };

  useEffect(() => {
    if (resetTransform !== null) {
      // Transform 초기화 후 다시 드래그할 수 있도록 상태를 업데이트
      const timer = setTimeout(() => {
        setResetTransform(null);
      }, 500); // 500ms 후에 resetTransform을 null로 설정
      return () => clearTimeout(timer);
    }
  }, [resetTransform]);

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
          const positionStyle = {
            top: `${positions[index].top}px`,
            left: `${positions[index].left}px`,
          };

          const animateStyle = isCorrect
            ? { x: 0, y: 0, transition: { duration: 0 } }
            : resetTransform === index
              ? { x: 0, y: 0 }
              : {};

          return (
            <motion.div
              key={index}
              className='absolute cursor-grab'
              style={positionStyle}
              drag={!isCorrect}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(event, info) => handleDragEnd(event, info, index)}
              animate={animateStyle}
              transition={
                isDragging && !isCorrect
                  ? { type: 'spring', stiffness: 300, damping: 20 }
                  : { duration: 0 }
              }
              initial={false}
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

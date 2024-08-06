import { useState, useRef, useEffect } from 'react';
import { motion, PanInfo } from 'framer-motion';
import TextCard from './TextCard';
import useInitialArrays from '@/hooks/QuizLounge/useInitialArrays';
import useResetTransform from '@/hooks/QuizLounge/useResetTransform';
import ResultModal from './ResultModal';

interface QuizContainerProps {
  answer: string[];
}

const QuizContainer = ({ answer }: QuizContainerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [openModal, setOpenModal] = useState(false);

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const {
    filteredAnswer,
    shuffleAnswer,
    initialPositions,
    positions,
    setPositions,
  } = useInitialArrays(answer);

  const [correctPositions, setCorrectPositions] = useState<boolean[]>(
    Array(filteredAnswer.length).fill(false)
  );

  const [allCorrect, setAllCorrect] = useState<boolean>(false);

  const { resetTransform, setResetTransform } = useResetTransform();

  useEffect(() => {
    const allCorrect = correctPositions.every((pos) => pos);
    if (allCorrect && correctPositions.length > 0) {
      setAllCorrect(true);
    }
  }, [correctPositions]);

  useEffect(() => {
    if (allCorrect) setOpenModal(true);
  }, [allCorrect]);

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

      if (isCorrectPosition) {
        // 정답 위치라면 correctPositions 배열을 업데이트합니다.
        setCorrectPositions((prev) =>
          prev.map((pos, i) => (i === index ? true : pos))
        );

        const answerElement =
          document.querySelectorAll('.answer')[droppedIndex];
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
        }
      } else {
        setResetTransform(index);
      }
    } else {
      setResetTransform(index);
    }
  };

  return (
    <>
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
        <div
          ref={containerRef}
          className='mt-[3.8rem] h-[178px] relative w-full'
        >
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

      {openModal && (
        <ResultModal
          handleModal={() => setOpenModal(false)}
          result='성공'
          title='선착순 25명 안에 들었어요'
          subTitle='[dmdkdkdkdkdkddkd]'
          code='RESDFG'
          image='/svg/closeIcon.svg'
          description='본 이벤트는 (주)쏘카와 함께하며, 쏘카 회원가입 및 로그인 후 이용 가능합니다. 
이벤트 참여를 위해 쏘카 어플리케이션에서 추가적인 절차가 요구될 수 있습니다.
이벤트 경품 수령을 위해 등록된 전화번호로 영업일 기준 3~5일 내 안내가 진행될 예정입니다.'
        />
      )}
    </>
  );
};

export default QuizContainer;

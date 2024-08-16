import { useState, useRef, useEffect, memo } from 'react';
import { motion, PanInfo } from 'framer-motion';
import TextCard from './TextCard';
import useInitialArrays from '@/hooks/QuizLounge/useInitialArrays';
import useResetTransform from '@/hooks/QuizLounge/useResetTransform';
import ResultModal from './ResultModal';
import { craftSideCannons } from '@/utils/confettiCrafter';
import { useNavigate } from 'react-router-dom';
import { ROUTER_PATH } from '@/constants/lib/constants';
import { useMutationPostAnswer } from '@/apis/quizLounge/query';
import TutorialResultModal from './TutorialResultModal';
import { ModalData, QuizContainerProps } from '@/types/quizLounge/type';

const QuizContainer = ({
  answer,
  mode,
  isGameEnded,
  setIsGamedEnded,
}: QuizContainerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [allCorrect, setAllCorrect] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const { filteredAnswer, shuffleAnswer, positions, setPositions } =
    useInitialArrays(answer, isGameEnded);
  const [correctPositions, setCorrectPositions] = useState<boolean[]>(
    Array(filteredAnswer.length).fill(false)
  );
  const { resetTransform, setResetTransform } = useResetTransform();

  const navigate = useNavigate();
  const mutation = useMutationPostAnswer();
  const [modalData, setModalData] = useState<ModalData>();

  useEffect(() => {
    const allCorrect = correctPositions.every((pos) => pos);
    if (allCorrect && correctPositions.length > 0) {
      setAllCorrect(true);
    }
  }, [correctPositions]);

  useEffect(() => {
    if (allCorrect) {
      setIsGamedEnded(true);
      craftSideCannons(1.5);
      const answerString: string = answer.join('');
      if (mode === 'tutorial') {
        setTimeout(() => setOpenModal(true), 1500);
      } else {
        mutation.mutate(answerString, {
          onSuccess: (data) => {
            setModalData(data.result);
            setTimeout(() => setOpenModal(true), 1500);
          },
        });
      }
    }
  }, [allCorrect]);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
    index: number
  ) => {
    if (!containerRef.current) return;
    setIsDragging(false);

    console.log(containerRef.current, info);
    const containerRect = containerRef.current.getBoundingClientRect();
    const droppedX = info.point.x - containerRect.left;
    const droppedIndex = Math.round(droppedX / 117);

    // 드롭된 위치가 유효한지 확인
    if (droppedIndex >= 0 && droppedIndex < answer.length) {
      const isCorrectPosition =
        filteredAnswer[droppedIndex] === shuffleAnswer[index];

      console.log(
        droppedIndex,
        filteredAnswer[droppedIndex],
        shuffleAnswer[index]
      );

      if (isCorrectPosition) {
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

  const handleModal = () => {
    setOpenModal(false);
    navigate(ROUTER_PATH.MAIN);
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
                <TextCard
                  type='answer'
                  answerChar={char}
                  isCorrect={isCorrect}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
      {openModal &&
        (mode === 'tutorial' ? (
          <TutorialResultModal handleClose={handleModal} />
        ) : (
          <ResultModal
            handleModal={handleModal}
            result={modalData!.isFcfsWinner}
            title={modalData!.fcfsResult.title}
            subTitle={modalData!.fcfsResult.subTitle}
            code={modalData!.fcfsResult.fcfsCode}
            image={modalData!.fcfsResult.qrCode}
            description={modalData!.fcfsResult.caution}
          />
        ))}
    </>
  );
};

export default memo(QuizContainer);

import { useState } from 'react';
import LoseModal from './Modal/LoseModal';
import { useMutationDrawData } from '@/apis/draw/query';
import { getCookie } from '@/utils/cookie';
import { useUrl } from '@/store/context/useUrl';
import EventModal from '@/components/common/Modal/EventModal/EventModal';
import { DrawResultResponse, WinModal } from '@/types/lottery/type';
import { QueryClient } from '@tanstack/react-query';
import Button from '../common/Button/Button';
import { useCanvasDrawing } from '@/hooks/LotteryLounge/useCanvasDrawing';

interface LotteryCanvasProps {
  onScratch: (result: DrawResultResponse) => void;
  remainDrawCount: number;
  handleRemainDrawCount: () => void;
}

const LotteryCanvas = ({
  onScratch,
  remainDrawCount,
  handleRemainDrawCount,
}: LotteryCanvasProps) => {
  const [isScratched, setIsScratched] = useState(false); // 최초 긁기 여부 확인
  const [isWin, setIsWin] = useState(false);
  const [result, setResult] = useState<WinModal | null>(null);
  const { setUrl } = useUrl();
  const token = getCookie('accessToken');
  const mutation = useMutationDrawData(token);
  const queryClient = new QueryClient();

  const {
    canvasRef,
    draw,
    endDrawing,
    isOpen,
    closeModal,
    isGameEnded,
    drawing,
    handleRetryButton,
    handleBackToMain,
  } = useCanvasDrawing();

  const startDrawing = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    if (remainDrawCount === 0) {
      alert(
        '기회가 모두 소진되었습니다. \n공유를 하여 기회를 얻거나 내일 다시 시도해주세요.'
      );
      return;
    }

    if (!isScratched) {
      // 최초 긁기 시에만 API 요청
      mutation.mutate(token, {
        onSuccess: (response) => {
          console.log('결과 성공:', response);
          queryClient.invalidateQueries({
            queryKey: ['drawAttendance'],
          });
          onScratch(response); // 결과 부모 컴포넌트로 전달
          handleRemainDrawCount();

          setUrl(response.result.shareUrl ?? '');
          if (response.result.isDrawWin) {
            setIsWin(true);
            setResult(response.result.winModal ?? null);
          }
        },
        onError: (error: Error) => {
          console.error('에러가 발생했습니다:', error);
        },
      });
      setIsScratched(true);
    }
    drawing.current = true;
    draw(e);
  };

  return (
    <>
      <div className='relative'>
        <canvas
          ref={canvasRef}
          width={784}
          height={400}
          className='relative top-0 left-0 cursor-pointer'
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={endDrawing}
          onMouseLeave={endDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={endDrawing}
        ></canvas>
      </div>

      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div onClick={closeModal}></div>
          {isWin && result ? (
            <EventModal
              title={result!.title}
              subtitle={result!.subtitle}
              image={result!.img}
              description={result!.description}
              handleClose={closeModal}
            />
          ) : (
            <LoseModal onClose={closeModal} />
          )}
        </div>
      )}
      {isGameEnded && (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
          {remainDrawCount > 0 ? (
            <Button
              type='squareWithBorder'
              text='복권 다시 긁기'
              handleClick={handleRetryButton}
            />
          ) : (
            <Button
              type='squareWithBorder'
              text='메인 화면으로 돌아가기'
              handleClick={handleBackToMain}
            />
          )}
        </div>
      )}
    </>
  );
};

export default LotteryCanvas;

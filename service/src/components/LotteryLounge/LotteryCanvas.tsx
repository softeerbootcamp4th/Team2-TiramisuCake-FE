import { useRef, useEffect, useState } from 'react';
import LoseModal from './Modal/LoseModal';
import { craftFireworks } from '@/utils/confettiCrafter';
import { useMutationDrawData } from '@/apis/draw/query';
import { getCookie } from '@/utils/cookie';
import { useUrl } from '@/store/context/useUrl';
import EventModal from '@/components/common/Modal/EventModal/EventModal';
import { DrawResultResponse, WinModal } from '@/types/Lottery/response';
import { useModalContext } from '@/store/context/useModalContext';
import { QueryClient } from '@tanstack/react-query';

interface LotteryCanvasProps {
  onScratch: (result: DrawResultResponse) => void;
  remainDrawCount: number;
}

const LotteryCanvas = ({ onScratch, remainDrawCount }: LotteryCanvasProps) => {
  const { isOpen, setIsOpen } = useModalContext();

  const [isResultOpen, setIsResultOpen] = useState(false);
  const [isScratched, setIsScratched] = useState(false); // 최초 긁기 여부 확인
  const [isWin, setIsWin] = useState(false);
  const [result, setResult] = useState<WinModal | null>(null);
  const queryClient = new QueryClient();

  const { setUrl } = useUrl();

  const closeModal = () => {
    setIsOpen(false);
    setIsResultOpen(false);
  };

  const token = getCookie('accessToken');
  const mutation = useMutationDrawData(token);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    canvas.width = 784;
    canvas.height = 400;

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 지우기 설정
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = 50;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
  }, []);

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

  const endDrawing = () => {
    drawing.current = false;
    if (canvasRef.current) {
      canvasRef.current.getContext('2d')?.beginPath();
    }
  };

  const draw = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    if (!drawing.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    let x, y;
    if ('clientX' in e) {
      x = (e.clientX - rect.left) * scaleX;
      y = (e.clientY - rect.top) * scaleY;
    } else {
      x = (e.touches[0].clientX - rect.left) * scaleX;
      y = (e.touches[0].clientY - rect.top) * scaleY;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);

    checkErasePercentage();
  };

  const checkErasePercentage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    let erasedPixels = 0;

    for (let i = 3; i < data.length; i += 4) {
      if (data[i] === 0) {
        erasedPixels++;
      }
    }

    const erasePercentage = (erasedPixels / (width * height)) * 100;

    if (erasePercentage >= 50) {
      fadeOutCanvas();
    }
  };

  const fadeOutCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.style.transition = 'opacity 1s';
      canvasRef.current.style.opacity = '0';
      craftFireworks(1);
      setTimeout(() => {
        setIsOpen(true);
        setIsResultOpen(true);
        if (canvasRef.current) {
          // 캔버스 영역 클릭할 수 없도록 설정
          canvasRef.current.style.pointerEvents = 'none';
        }
      }, 1500);
    }
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

      {isOpen && isResultOpen && (
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
    </>
  );
};
export default LotteryCanvas;

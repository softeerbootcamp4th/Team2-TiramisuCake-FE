import { useRef, useEffect, useState } from 'react';
import LoseModal from './Modal/LoseModal';
import { craftFireworks } from '@/utils/confettiCrafter';
import { useMutationDrawData } from '@/apis/draw/query';
import { getCookie } from '@/utils/cookie';
import { useUrl } from '@/store/context/useUrl';
import EventModal from '@/components/common/Modal/EventModal/EventModal';

interface Result {
  title: string;
  subtitle: string;
  img: string;
  description: string;
}

const LotteryCanvas = ({ onScratch }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScratched, setIsScratched] = useState(false); // 최초 긁기 여부 확인
  const [isWin, setIsWin] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const { setUrl } = useUrl();
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const textVisible = true;
  const token = getCookie('accessToken');
  const mutation = useMutationDrawData(token);
  const gradientStyle = {
    background:
      'linear-gradient(91deg, rgba(140, 200, 212, 0.70) 2.57%, rgba(58, 139, 160, 0.70) 101.5%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    opacity: textVisible ? 1 : 0,
  };

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
    if (!isScratched) {
      // 최초 긁기 시에만 API 요청
      mutation.mutate(token, {
        onSuccess: (response) => {
          console.log('결과 성공:', response);
          onScratch(response.result); // 결과 부모 컴포넌트로 전달
          setUrl(response.result.shareUrl);
          if (response.result.drawWin) {
            setIsWin(true);
            setResult(response.result.winModal);
          }
        },
        onError: (error: Error) => {
          console.error('인증번호 전송 실패:', error);
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
        setIsModalOpen(true);
      }, 1500);
    }
  };
  return (
    <>
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
      >
        <span
          style={gradientStyle}
          className='absolute text-[27px] text-center font-semibold'
        >
          마우스로 드래그해 복권을 긁어보세요
        </span>
      </canvas>
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div
            className='absolute inset-0 bg-black opacity-50'
            onClick={closeModal}
          ></div>
          {isWin && result ? (
            <EventModal
              title={result.title}
              subtitle={result.subtitle}
              image={result.img}
              description={result.description}
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

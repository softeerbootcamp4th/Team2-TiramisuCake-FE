import { useRef, useEffect, useState, useCallback } from 'react';
import { craftFireworks } from '@/utils/confettiCrafter';
import { useModalContext } from '@/store/context/useModalContext';
import { useNavigate } from 'react-router-dom';
import { ROUTER_PATH } from '@/constants/lib/constants';

export const useCanvasDrawing = () => {
  const { isOpen, setIsOpen } = useModalContext();

  const [isGameEnded, setIsGameEnded] = useState(false);

  const isCompeletRef = useRef<boolean>(false);

  const navigation = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
    setIsGameEnded(true);
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

    const startX = 100;
    const startY = 100;
    const width = canvas.width - startY * 2;
    const height = canvas.height - startX * 2;
    const imageData = ctx.getImageData(startX, startY, width, height);
    const data = imageData.data;
    let erasedPixels = 0;

    for (let i = 3; i < data.length; i += 4) {
      if (data[i] === 0) {
        erasedPixels++;
      }
    }

    const erasePercentage = (erasedPixels / (width * height)) * 100;

    if (erasePercentage >= 75 && !isCompeletRef.current) {
      fadeOutCanvas();
      craftFireworks(1);
      isCompeletRef.current = true;
      setTimeout(() => {
        setIsOpen(true);
      }, 1500);
    }
  };

  const fadeOutCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.style.transition = 'opacity 1s';
      canvasRef.current.style.opacity = '0';
      canvasRef.current.style.pointerEvents = 'none';
    }
  };

  const handleRetryButton = () => {
    window.location.reload();
  };

  const handleBackToMain = useCallback(() => {
    navigation(ROUTER_PATH.MAIN);
  }, [navigation]);

  return {
    canvasRef,
    draw,
    endDrawing,
    isOpen,
    closeModal,
    isGameEnded,
    drawing,
    handleRetryButton,
    handleBackToMain,
  };
};

import { PropsWithChildren } from 'react';
import { Button } from '../ui/button';
/**
 * Modal Component
 * @param Element
 * @param isButton : 버튼 사용 여부
 * @param handleCloseClick : 모달 close 핸들러 함수
 * @param handleButtonClick : 모달 버튼 핸들러 함수
 * @returns
 */

interface ModalProps {
  isButton?: boolean;
  handleCloseClick: () => void;
  handleButtonClick: () => void;
}

const Modal = ({
  children,
  isButton = true,
  handleCloseClick,
  handleButtonClick,
}: PropsWithChildren<ModalProps>) => {
  return (
    <div className='shadow-custom p-3 flex flex-col gap-4 items-center max-w-[374px] rounded-lg'>
      <div className='flex flex-col items-end w-full'>
        <img
          src='/svg/close.svg'
          className='w-[0.9rem] h-[0.9rem] cursor-pointer'
          onClick={handleCloseClick}
        />
      </div>
      {children}
      {isButton && (
        <Button className='w-[140px] mb-4' onClick={handleButtonClick}>
          저장
        </Button>
      )}
    </div>
  );
};

export default Modal;

import useScrollLock from '@/hooks/common/useScrollLock';
import Button from '../../Button/Button';
//import Modal from '../Modal';
import ReactDOM from 'react-dom';

interface ExitModalProps {
  handleClose: () => void;
  handleConfirm: () => void;
  handleCancel: () => void;
  isOpen: boolean;
}
const ExitModal = ({
  handleClose,
  handleCancel,
  handleConfirm,
  isOpen,
}: ExitModalProps) => {
  const portalRoot = document.getElementById('portal-root');
  useScrollLock(isOpen);
  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <div className='fixed inset-0 w-screen flex items-center justify-center z-[99] backdrop-blur-blur-20 bg-modal-bg'>
      <div className='bg-white flex flex-col items-center gap-10 relative'>
        <img
          src='/svg/closeIcon.svg'
          alt='close icon'
          onClick={handleClose}
          className='cursor-pointer absolute top-[-4rem] right-0'
        />

        <div className='p-12 flex flex-col gap-3 items-center min-w-[412px] '>
          <h1 className='text-h-s font-bold'>지금 나가시겠습니까?</h1>

          <img
            src='https://d1wv99asbppzjv.cloudfront.net/main-page/sad.png'
            className='w-[150px] h-[150px] '
            alt='sad face'
          />
          <p className='text-red'>
            지금 나가시면 이벤트 참여로 간주되지 않습니다.
          </p>
          <div className='flex mt-6 px-6 gap-3 items-center justify-evenly '>
            <Button type='mediumRound' text='예' handleClick={handleConfirm} />
            <Button
              type='mediumRound'
              text='아니오'
              handleClick={handleCancel}
            />
          </div>
        </div>
      </div>
    </div>,
    portalRoot
  );
};

export default ExitModal;

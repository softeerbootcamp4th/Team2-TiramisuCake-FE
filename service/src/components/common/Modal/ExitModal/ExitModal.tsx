import Button from '../../Button/Button';
import Modal from '../Modal';
import ReactDOM from 'react-dom';

interface ExitModalProps {
  handleClose: () => void;
  handleConfirm: () => void;
  handleCancel: () => void;
}
const ExitModal = ({
  handleClose,
  handleCancel,
  handleConfirm,
}: ExitModalProps) => {
  const portalRoot = document.getElementById('portal-root');

  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <Modal handleClose={handleClose}>
      <div className='p-12 flex flex-col gap-3 items-center min-w-[412px] '>
        <h1 className='text-h-s font-bold'>지금 나가시겠습니까?</h1>

        <img
          src='https://d1wv99asbppzjv.cloudfront.net/main-page/sad.png'
          className='w-[150px] h-[150px] '
        />
        <p className='text-red'>
          지금 나가시면 이벤트 참여로 간주되지 않습니다.
        </p>
        <div className='flex mt-6 px-6 gap-3 items-center justify-evenly '>
          <Button type='mediumRound' text='예' handleClick={handleConfirm} />
          <Button type='mediumRound' text='아니오' handleClick={handleCancel} />
        </div>
      </div>
    </Modal>,
    portalRoot
  );
};

export default ExitModal;

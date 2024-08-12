import Button from '../../Button/Button';
import Modal from '../Modal';

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
  return (
    <Modal handleClose={handleClose}>
      <div className='px-10 py-12 flex flex-col gap-3 items-center '>
        <h1 className='text-h-s font-bold'>지금 나가시겠습니까?</h1>
        <p className='text-red'>
          지금 나가시면 이벤트 참여 횟수가 1회 감소됩니다.
        </p>
        <div className='flex mt-6 px-6 gap-3 items-center justify-evenly '>
          <Button type='round' text='예' handleClick={handleConfirm} />
          <Button type='round' text='아니오' handleClick={handleCancel} />
        </div>
      </div>
    </Modal>
  );
};

export default ExitModal;

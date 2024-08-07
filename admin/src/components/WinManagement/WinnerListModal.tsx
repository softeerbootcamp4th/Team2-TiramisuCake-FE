import Modal from '../common/Modal';
import WinnerList from './WinnerList';

interface Props {
  handleClose: () => void;
}

const WinnerListModal = ({ handleClose }: Props) => {
  return (
    <Modal
      handleButtonClick={() => {
        console.log('hi');
      }}
      handleCloseClick={handleClose}
    >
      <WinnerList />
    </Modal>
  );
};

export default WinnerListModal;

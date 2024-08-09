import Modal from '../common/Modal';
import FCFSWinnerList from './FCFSWinnerList';

interface Props {
  handleClose: () => void;
}

const FCFSWinnerListModal = ({ handleClose }: Props) => {
  return (
    <Modal
      handleButtonClick={() => {
        console.log('hi');
      }}
      handleCloseClick={handleClose}
    >
      <FCFSWinnerList />
    </Modal>
  );
};

export default FCFSWinnerListModal;

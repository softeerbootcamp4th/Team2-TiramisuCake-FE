import Modal from '../common/Modal';
import FCFSWinnerList from './FCFSWinnerList';

interface Props {
  handleClose: () => void;
}

const FCFSWinnerListModal = ({ handleClose }: Props) => {
  return (
    <Modal isButton={false} handleCloseClick={handleClose}>
      <FCFSWinnerList />
    </Modal>
  );
};

export default FCFSWinnerListModal;

import RaffleWinnerList from './RaffleWinnerList';
import Modal from '../common/Modal';

interface Props {
  handleClose: () => void;
}

const RaffleWinnerListModal = ({ handleClose }: Props) => {
  return (
    <Modal isButton={false} handleCloseClick={handleClose}>
      <RaffleWinnerList />
    </Modal>
  );
};

export default RaffleWinnerListModal;

import RaffleWinnerList from './RaffleWinnerList';
import Modal from '../common/Modal';

interface Props {
  handleClose: () => void;
}

const RaffleWinnerListModal = ({ handleClose }: Props) => {
  return (
    <Modal
      handleButtonClick={() => {
        console.log('hi');
      }}
      handleCloseClick={handleClose}
    >
      <RaffleWinnerList />
    </Modal>
  );
};

export default RaffleWinnerListModal;

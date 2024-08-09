import ListContainer from '../List/ListContainer';
import EditButton from '../Button/EditButton';
import { useNavigate } from 'react-router-dom';
import { ROUTER_PATH } from '@/lib/constants';

interface Props {
  pageType?: 'main' | 'manage';
  handleModalOpen?: () => void;
  selectRaffleModal?: () => void;
  selectFCFSModal?: () => void;
}

const WinnersListContainer = ({
  pageType = 'main',
  handleModalOpen,
  selectRaffleModal,
  selectFCFSModal,
}: Props) => {
  const navigator = useNavigate();

  const showWinnerManage = () => {
    navigator(ROUTER_PATH.WIN_MANAGE);
  };

  const handleFCFSButtonClick = () => {
    if (selectFCFSModal && handleModalOpen) {
      selectFCFSModal();
      handleModalOpen();
    }
  };

  const handleRaffleButtonClick = () => {
    if (selectRaffleModal && handleModalOpen) {
      selectRaffleModal();
      handleModalOpen();
    }
  };

  return (
    <ListContainer width={pageType === 'main' ? '30rem' : '39rem'}>
      <div className='flex flex-row py-4 items-center mr-6'>
        <div className='px-4 text-left text-lg mr-auto'>당첨자 목록</div>
        {pageType === 'main' ? (
          <EditButton text='조회하기' onClick={showWinnerManage} />
        ) : (
          <div className='flex'>
            <EditButton text='선착순 목록' onClick={handleFCFSButtonClick} />
            <EditButton text='추첨 목록' onClick={handleRaffleButtonClick} />
          </div>
        )}
      </div>
    </ListContainer>
  );
};

export default WinnersListContainer;

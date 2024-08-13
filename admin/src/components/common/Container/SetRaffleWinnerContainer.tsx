import ListContainer from '../List/ListContainer';
import WinnerList from '../List/WinnerList';
import { ROUTER_PATH } from '@/lib/constants';
import { useNavigate } from 'react-router-dom';
import { useCombinedData } from '@/apis/main/query';

interface Props {
  pageType?: 'main' | 'manage';
  handleModalOpen?: () => void;
}

const SetRaffleWinnerContainer = ({
  pageType = 'main',
  handleModalOpen,
}: Props) => {
  const { winnerData } = useCombinedData();
  const drawEventList = winnerData?.result.drawEventList;

  const navigator = useNavigate();

  if (!winnerData) {
    return <div>없는데용</div>;
  }
  const showWinnerManage = () => {
    navigator(ROUTER_PATH.WIN_MANAGE);
  };

  const handleEditButtonClick = () => {
    if (pageType === 'manage' && handleModalOpen) {
      handleModalOpen();
    } else {
      showWinnerManage();
    }
  };

  return (
    <ListContainer width={pageType === 'main' ? '30rem' : '39rem'}>
      <WinnerList
        title='당첨자 추첨'
        winners={drawEventList}
        onClick={handleEditButtonClick}
      />
    </ListContainer>
  );
};

export default SetRaffleWinnerContainer;

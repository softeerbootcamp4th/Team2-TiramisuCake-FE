import ListContainer from '../List/ListContainer';
import WinnerList from '../List/WinnerList';
import { ROUTER_PATH } from '@/lib/constants';
import { useNavigate } from 'react-router-dom';

const winners = [
  { rank: '1등', count: 14, probability: '0.xxx' },
  { rank: '2등', count: 140, probability: '0.xxxx' },
  { rank: '3등', count: 1400, probability: '0.xxxxxx' },
];
interface Props {
  pageType?: 'main' | 'manage';
  handleModalOpen?: () => void;
}

const SetRaffleWinnerContainer = ({
  pageType = 'main',
  handleModalOpen,
}: Props) => {
  const navigator = useNavigate();

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
    <ListContainer>
      <WinnerList
        title='당첨자 추첨'
        winners={winners}
        onClick={handleEditButtonClick}
      />
    </ListContainer>
  );
};

export default SetRaffleWinnerContainer;

import ListContainer from '../List/ListContainer';
import WinnerList from '../List/WinnerList';
import { ROUTER_PATH } from '@/lib/constants';
import { useNavigate } from 'react-router-dom';
import { WinDrawEventList } from '@/type/winManagement/type';

interface Props {
  drawList: WinDrawEventList[];
  pageType?: 'main' | 'manage';
  handleModalOpen?: () => void;
}

const SetRaffleWinnerContainer = ({
  drawList,
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
    <ListContainer width={pageType === 'main' ? '30rem' : '39rem'}>
      <WinnerList
        title='당첨자 추첨'
        winners={drawList}
        onClick={handleEditButtonClick}
      />
    </ListContainer>
  );
};

export default SetRaffleWinnerContainer;

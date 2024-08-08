import EditButton from '@/components/common/Button/EditButton';
import ListContainer from '@/components/common/List/ListContainer';
import WinnerList from '@/components/common/List/WinnerList';
import ManageContainer from '@/components/common/ManageContainer';
import EventManagement from '@/components/section/EventManagement';
import EditButton from '@/components/common/Button/EditButton';
import { ROUTER_PATH } from '@/lib/constants';
import List from '@/components/common/List/list';
import { useNavigate } from 'react-router-dom';
import SetRaffleWinnerContainer from '@/components/common/Container/SetRaffleWinnerContainer';
import SetFCFSWinnerContainer from '@/components/common/Container/SetFCFSWinnerContainer';
import WinnersListContainer from '@/components/common/Container/WinnersListContainer';

const Event1 = [
  { id: '1', period: '2024.09.02(월) 10:00:00 ~ 12:00:00' },
  { id: '2', period: '2024.09.05(목) 10:00:00 ~ 12:00:00' },
  { id: '3', period: '2024.09.09(월) 10:00:00 ~ 12:00:00' },
  { id: '4', period: '2024.09.12(목) 10:00:00 ~ 12:00:00' },
];

const MainPage = () => {
  const navigator = useNavigate();

  const showEventManage = () => {
    navigator(ROUTER_PATH.EVENT_MANAGE);
  };

  const showEventMetrics = () => {
    navigator(ROUTER_PATH.EVENT_METRICS);
  };

  return (
    <div className='items-center justify-center flex flex-row gap-4 mt-10'>
      <EventManagement />
      <ManageContainer>
        <div className='text-black text-center text-4xl font-bold mt-6'>
          당첨 관리
        </div>
        <div className='text-gray-800 text-sm text-center my-3'>
          선착순 당첨 인원 수 설정 / 당첨 / 당첨자 목록 조회
        </div>
        <SetFCFSWinnerContainer />
        <SetRaffleWinnerContainer />
        <WinnersListContainer />
      </ManageContainer>
    </div>
  );
};

export default MainPage;

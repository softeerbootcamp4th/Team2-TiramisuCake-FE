import EditButton from '@/components/common/Button/EditButton';
import ListContainer from '@/components/common/List/ListContainer';
import WinnerList from '@/components/common/List/WinnerList';
import ManageContainer from '@/components/common/ManageContainer';
import EventManagement from '@/components/section/EventManagement';
import { ROUTER_PATH } from '@/lib/constants';
import List from '@/components/common/List/list';
import { useNavigate } from 'react-router-dom';

const Event2 = [
  { id: '1', period: '2024.09.02(월)', winners: 25 },
  { id: '2', period: '2024.09.05(목)', winners: 25 },
  { id: '3', period: '2024.09.09(월)', winners: 25 },
  { id: '4', period: '2024.09.12(목)', winners: 25 },
];
const winners = [
  { rank: '1등', count: 14, probability: '0.xxx' },
  { rank: '2등', count: 140, probability: '0.xxxx' },
  { rank: '3등', count: 1400, probability: '0.xxxxxx' },
];

const MainPage = () => {
  const navigator = useNavigate();

  const showEventManage = () => {
    navigator(ROUTER_PATH.EVENT_MANAGE);
  };
  const showWinnerManage = () => {
    navigator(ROUTER_PATH.WIN_MANAGE);
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
        <ListContainer>
          <div className='flex flex-row px-4 text-left text-lg py-4'>
            <span className='my-auto font-semibold'>
              선착순 당첨 인원 수 설정
            </span>
            <div className='ml-auto text-[16px] mr-3'>
              <EditButton text='수정하기' onClick={showEventManage} />
            </div>
          </div>
          <List onClick={showWinnerManage} events={Event2} />
        </ListContainer>

        <ListContainer>
          <WinnerList
            title='당첨자 추첨'
            winners={winners}
            onClick={showEventManage}
          />
        </ListContainer>
        <ListContainer>
          <div className='flex flex-row py-4 items-center mr-6'>
            <div className='px-4 text-left text-lg mr-auto'>당첨자 목록</div>
            <EditButton text='조회하기' onClick={showEventMetrics} />
          </div>
        </ListContainer>
      </ManageContainer>
    </div>
  );
};

export default MainPage;

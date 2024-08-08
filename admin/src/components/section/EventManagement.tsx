import List from '../common/List/list';
import EditButton from '../common/Button/EditButton';
import ListContainer from '../common/List/ListContainer';
import ManageContainer from '../common/ManageContainer';
import { ROUTER_PATH } from '@/lib/constants';
import { useNavigate } from 'react-router-dom';

const Event1 = [
  { id: '1', period: '2024.09.02(월) 10:00:00 ~ 12:00:00' },
  { id: '2', period: '2024.09.05(목) 10:00:00 ~ 12:00:00' },
  { id: '3', period: '2024.09.09(월) 10:00:00 ~ 12:00:00' },
  { id: '4', period: '2024.09.12(목) 10:00:00 ~ 12:00:00' },
];

const EventManagement = () => {
  const navigator = useNavigate();

  const showEventManage = () => {
    navigator(ROUTER_PATH.EVENT_MANAGE);
  };
  const showEventMetrics = () => {
    navigator(ROUTER_PATH.EVENT_METRICS);
  };
  return (
    <ManageContainer>
      <div className='text-black text-center text-4xl font-bold mt-6'>
        이벤트 관리
      </div>
      <div className='text-gray-800 text-sm text-center my-3'>
        이벤트 오픈 / 종료 시간 설정
      </div>
      <ListContainer>
        <div className='flex flex-row px-4 text-left text-lg py-4'>
          <span className='my-auto font-semibold'>선착순 이벤트</span>
          <div className='ml-auto text-[16px] mr-3'>
            <EditButton text='수정하기' onClick={showEventManage} />
          </div>
        </div>
        <List onClick={showEventManage} events={Event1} />
      </ListContainer>
      <ListContainer>
        <div className='px-4 text-left text-lg pt-4'>추첨 이벤트</div>
        <div className='text-center py-1'>
          <span className='font-semibold'>복권 긁기 이벤트 </span>
          <span className='text-sm'>
            2024.09.02(월) 00:00:00 ~ 2024.09.15(일) 23:59:59
          </span>
        </div>
        <div className='h-[4.1rem] relative flex w-full items-end pb-4'>
          <div className='absolute right-6'>
            <EditButton text='수정하기' onClick={showEventManage} />
          </div>
        </div>
      </ListContainer>
      <ListContainer>
        <div className='flex flex-row py-4 items-center mr-6'>
          <div className='px-4 text-left text-lg mr-auto'>
            이벤트 지표 데이터
          </div>
          <EditButton text='조회하기' onClick={showEventMetrics} />
        </div>
      </ListContainer>
    </ManageContainer>
  );
};

export default EventManagement;
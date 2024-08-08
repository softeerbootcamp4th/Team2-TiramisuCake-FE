import ManageContainer from '@/components/common/ManageContainer';
import EventManagement from '@/components/section/EventManagement';
import SetRaffleWinnerContainer from '@/components/common/Container/SetRaffleWinnerContainer';
import SetFCFSWinnerContainer from '@/components/common/Container/SetFCFSWinnerContainer';
import WinnersListContainer from '@/components/common/Container/WinnersListContainer';

const MainPage = () => {
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

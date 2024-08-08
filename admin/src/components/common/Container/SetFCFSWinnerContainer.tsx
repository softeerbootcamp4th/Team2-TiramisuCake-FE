import ListContainer from '../List/ListContainer';
import EditButton from '../Button/EditButton';
import { useNavigate } from 'react-router-dom';
import { ROUTER_PATH } from '@/lib/constants';
import List from '../List/list';

const Event2 = [
  { id: '1', period: '2024.09.02(월)', winners: 25 },
  { id: '2', period: '2024.09.05(목)', winners: 25 },
  { id: '3', period: '2024.09.09(월)', winners: 25 },
  { id: '4', period: '2024.09.12(목)', winners: 25 },
];

interface Props {
  pageType?: 'main' | 'manage';
  handleModalOpen?: () => void;
}

const SetFCFSWinnerContainer = ({
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
      <div className='flex flex-row px-4 text-left text-lg py-4'>
        <span className='my-auto font-semibold'>선착순 당첨 인원 수 설정</span>
        <div className='ml-auto text-[16px] mr-3'>
          <EditButton text='수정하기' onClick={handleEditButtonClick} />
        </div>
      </div>
      <List onClick={showWinnerManage} events={Event2} />
    </ListContainer>
  );
};

export default SetFCFSWinnerContainer;

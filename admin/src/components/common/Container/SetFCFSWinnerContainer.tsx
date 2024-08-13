import ListContainer from '../List/ListContainer';
import EditButton from '../Button/EditButton';
import { useNavigate } from 'react-router-dom';
import { ROUTER_PATH } from '@/lib/constants';
import List from '../List/list';
import { useCombinedData } from '@/apis/main/query';

interface Props {
  pageType?: 'main' | 'manage';
  handleModalOpen?: () => void;
}

const SetFCFSWinnerContainer = ({
  pageType = 'main',
  handleModalOpen,
}: Props) => {
  const { winnerData } = useCombinedData();
  const fcfsList = winnerData?.result.fcfsEventList;
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
      <div className='flex flex-row px-4 text-left text-lg py-4'>
        <span className='my-auto font-semibold'>선착순 당첨 인원 수 설정</span>
        <div className='ml-auto text-[16px] mr-3'>
          <EditButton text='수정하기' onClick={handleEditButtonClick} />
        </div>
      </div>
      <List onClick={showWinnerManage} events={fcfsList} />
    </ListContainer>
  );
};

export default SetFCFSWinnerContainer;

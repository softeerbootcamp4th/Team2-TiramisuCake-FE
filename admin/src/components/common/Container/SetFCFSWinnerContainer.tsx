import ListContainer from '../List/ListContainer';
import EditButton from '../Button/EditButton';
import { useNavigate } from 'react-router-dom';
import { ROUTER_PATH } from '@/lib/constants';
import List from '../List/List';
import { FCFSEventList } from '@/type/main/type';

interface Props {
  FCFSList: FCFSEventList[];
  pageType?: 'main' | 'manage';
  handleModalOpen?: () => void;
}

const SetFCFSWinnerContainer = ({
  FCFSList,
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
      <div className='flex flex-row px-4 text-left text-lg py-4'>
        <span className='my-auto font-semibold'>선착순 당첨 인원 수 설정</span>
        <div className='ml-auto text-[16px] mr-3'>
          <EditButton text='수정하기' onClick={handleEditButtonClick} />
        </div>
      </div>
      <List onClick={showWinnerManage} events={FCFSList} />
    </ListContainer>
  );
};

export default SetFCFSWinnerContainer;

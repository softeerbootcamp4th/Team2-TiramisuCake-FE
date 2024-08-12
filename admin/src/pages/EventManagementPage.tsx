'use client';
import { useState } from 'react';

import EditButton from '@/components/common/Button/EditButton';
import List from '@/components/common/List/list';
import ListContainer from '@/components/common/List/ListContainer';
import { ROUTER_PATH } from '@/lib/constants';
import { useNavigate } from 'react-router-dom';
import FCFSModal from '@/components/EventManagement/FCFSModal';
import RaffleModal from '@/components/EventManagement/RaffleModal';

const Event1 = [
  { id: '1', period: '2024.09.02(월) 10:00:00 ~ 12:00:00' },
  { id: '2', period: '2024.09.05(목) 10:00:00 ~ 12:00:00' },
  { id: '3', period: '2024.09.09(월) 10:00:00 ~ 12:00:00' },
  { id: '4', period: '2024.09.12(목) 10:00:00 ~ 12:00:00' },
];

const EventManagementPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWinModalOpen, setIsWinModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    // 저장 로직 추가
    setIsModalOpen(false);
  };

  const handleWinOpenModal = () => {
    setIsWinModalOpen(true);
  };

  const handleWinCloseModal = () => {
    setIsWinModalOpen(false);
  };

  const handleWinSave = () => {
    // 저장 로직 추가
    setIsWinModalOpen(false);
  };

  const navigator = useNavigate();

  const showEventMetrics = () => {
    navigator(ROUTER_PATH.EVENT_METRICS);
  };

  return (
    <div className='min-w-screen h-full m-10 flex-1 bg-[#F3F5F7] '>
      <div className='text-black text-center text-4xl font-bold pt-8'>
        이벤트 관리
      </div>
      <div className='text-gray-800 text-sm text-center my-3'>
        이벤트 오픈 / 종료 시간 설정
      </div>
      <div className='ml-16 w-fit mt-10'>
        <ListContainer width='39rem'>
          <div className='flex flex-row px-4 text-left text-lg py-4'>
            <span className='my-auto font-semibold'>
              선착순 이벤트 오픈 / 종료 시간 설정
            </span>
            <div className='ml-auto text-[16px] mr-3'>
              <EditButton text='수정하기' onClick={handleOpenModal} />
            </div>
          </div>
          <List onClick={handleOpenModal} events={Event1} />
        </ListContainer>
        <ListContainer width='39rem'>
          <div className='px-4 text-left text-lg pt-4 font-semibold'>
            추첨 이벤트 오픈 / 종료 시간 설정
          </div>
          <div className='ml-4 py-4 text-center flex items-center'>
            <span className='font-semibold'>복권 긁기 이벤트 </span>
            <span className='text-sm mx-2'>
              2024.09.02(월) 00:00:00 ~ 2024.09.15(일) 23:59:59
            </span>
            <EditButton text='수정하기' onClick={handleWinOpenModal} />
          </div>
        </ListContainer>
        <ListContainer width='39rem'>
          <div className='flex flex-row py-4 items-center mr-6'>
            <div className='px-4 text-left text-lg mr-auto'>
              이벤트 지표 데이터
            </div>
            <EditButton text='조회하기' onClick={showEventMetrics} />
          </div>
        </ListContainer>
      </div>
      <FCFSModal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        handleSave={handleSave}
      />
      <RaffleModal
        isOpen={isWinModalOpen}
        handleClose={handleWinCloseModal}
        handleSave={handleWinSave}
      />
    </div>
  );
};

export default EventManagementPage;

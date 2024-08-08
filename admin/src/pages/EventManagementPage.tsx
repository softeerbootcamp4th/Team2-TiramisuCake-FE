'use client';
import { useState } from 'react';
import { TimePicker } from '@/components/ui/datetime-picker';
import { Calendar } from '@/components/ui/calendar';
import Modal from '@/components/common/Modal';
import EditButton from '@/components/common/Button/EditButton';
import List from '@/components/common/List/list';
import ListContainer from '@/components/common/List/ListContainer';
import { ROUTER_PATH } from '@/lib/constants';
import { useNavigate } from 'react-router-dom';

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
    console.log(startRaffletime);
    console.log(endRaffletime);
    setIsWinModalOpen(false);
  };

  const [date, setDate] = useState<Date | undefined>(undefined);
  const [startFCFSTime, setstartFCFSTime] = useState<Date | undefined>(
    undefined
  );
  const [endFCFSTime, setEndFCFSTime] = useState<Date | undefined>(undefined);
  const [startRaffletime, setStartRaffleTime] = useState<Date | undefined>(
    undefined
  );
  const [endRaffletime, setEndRaffleTime] = useState<Date | undefined>(
    undefined
  );

  const navigator = useNavigate();

  const showEventMetrics = () => {
    navigator(ROUTER_PATH.EVENT_METRICS);
  };

  return (
    <div className='bg-slate-100 m-8 h-[47.5rem]'>
      <div className='text-black text-center text-4xl font-bold pt-10'>
        이벤트 관리
      </div>
      <div className='text-gray-800 text-sm text-center my-3'>
        이벤트 오픈 / 종료 시간 설정
      </div>
      <div className='ml-16 w-fit'>
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
      {isModalOpen && (
        <div className='fixed top-[244px] right-80 flex w-fit h-fit flex-row'>
          <Modal
            handleCloseClick={handleCloseModal}
            handleButtonClick={handleSave}
          >
            <div className='flex flex-row mx-4 '>
              <div className='space-y-2 space-x-2'>
                <Calendar
                  mode='single'
                  selected={date}
                  onSelect={setDate}
                  className='rounded-md border'
                />
              </div>
              <div className='flex flex-col'>
                <div className='space-y-2 ml-4 my-auto'>
                  <p>오픈 시간</p>
                  <TimePicker
                    date={startFCFSTime}
                    onChange={setstartFCFSTime}
                  />
                </div>
                <div className='space-y-2 ml-4 my-auto'>
                  <p>오픈 시간</p>
                  <TimePicker date={endFCFSTime} onChange={setEndFCFSTime} />
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}
      {isWinModalOpen && (
        <div className='fixed bottom-[44px] right-[319px] flex w-fit h-[175px] flex-row'>
          <Modal
            handleCloseClick={handleWinCloseModal}
            handleButtonClick={handleWinSave}
          >
            <div className='flex flex-row mx-4 '>
              <div className='flex flex-row'>
                <div className='space-y-2 mr-16 my-auto'>
                  <p>오픈 시간</p>
                  <TimePicker
                    date={startRaffletime}
                    onChange={setStartRaffleTime}
                  />
                </div>
                <div className='space-y-2 ml-4 my-auto'>
                  <p>오픈 시간</p>
                  <TimePicker
                    date={endRaffletime}
                    onChange={setEndRaffleTime}
                  />
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default EventManagementPage;

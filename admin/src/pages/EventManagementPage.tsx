'use client';
import { useEffect, useState } from 'react';
import EditButton from '@/components/common/Button/EditButton';
import List from '@/components/common/List/List';
import ListContainer from '@/components/common/List/ListContainer';
import { ROUTER_PATH } from '@/lib/constants';
import { useNavigate } from 'react-router-dom';
import FCFSModal from '@/components/EventManagement/FCFSModal';
import RaffleModal from '@/components/EventManagement/RaffleModal';
import { useEventsData } from '@/apis/main/query';
import { getWeekDay } from '@/utils/getWeekDay';
import { useMutationDraw, useMutationFcFs } from '@/apis/event/query';
import {
  DrawRequest,
  EventDrawEventData,
  EventFcFsEventData,
  FcFsRequest,
} from '@/type/eventManagement/type';
import { useQueryClient } from '@tanstack/react-query';

const EventManagementPage = () => {
  const mutationFcFs = useMutationFcFs();
  const mutationDraw = useMutationDraw();
  const queryClient = useQueryClient();
  const { data } = useEventsData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWinModalOpen, setIsWinModalOpen] = useState(false);
  const [fcfsData, setFcFsData] = useState<EventFcFsEventData[]>([]);
  const [drawData, setDrawData] = useState<EventDrawEventData | undefined>(
    undefined
  );
  const [text, setText] = useState<string>();

  useEffect(() => {
    if (data) {
      setFcFsData(data.result.fcfsEventList);
      setDrawData(data.result.drawEvent);
    }
  }, [data]);

  useEffect(() => {
    if (drawData) {
      const newText = `${drawData.startDate}${getWeekDay(drawData.startDate)} ${
        drawData.startTime
      } ~ ${drawData.endDate}${getWeekDay(drawData.endDate)} ${
        drawData.endTime
      }`;

      setText(newText);
    }
  }, [drawData]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = (body: FcFsRequest) => {
    mutationFcFs.mutate(body, {
      onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries({ queryKey: ['getEventsData'] });
      },
      onError: (error) => {
        console.error('Error:', error);
      },
    });
  };

  const handleWinOpenModal = () => {
    setIsWinModalOpen(true);
  };

  const handleWinCloseModal = () => {
    setIsWinModalOpen(false);
  };

  const handleWinSave = (body: DrawRequest) => {
    mutationDraw.mutate(body, {
      onSuccess: (data) => {
        console.log(data);
        queryClient.invalidateQueries({ queryKey: ['getEventsData'] });
      },
      onError: (error) => {
        console.error('Error:', error);
      },
    });
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
          <List onClick={handleOpenModal} events={fcfsData} />
        </ListContainer>
        <ListContainer width='39rem'>
          <div className='px-4 text-left text-lg pt-4 font-semibold'>
            추첨 이벤트 오픈 / 종료 시간 설정
          </div>
          <div className='ml-4 py-4 text-center flex items-center'>
            <span className='font-semibold'>복권 긁기 이벤트 </span>
            <span className='text-sm mx-2'>{text}</span>
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

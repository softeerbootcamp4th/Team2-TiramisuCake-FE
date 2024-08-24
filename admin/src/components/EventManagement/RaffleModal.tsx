'use client';
import { TimePicker } from '@/components/ui/datetime-picker';
import Modal from '@/components/common/Modal';
import { useRaffleRequest } from '@/hooks/useRaffleRequest';
import { DrawRequest } from '@/type/eventManagement/type';

interface RaffleModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSave: (body: DrawRequest) => void;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

const RaffleModal = ({
  isOpen,
  handleClose,
  handleSave,
  startDate,
  startTime,
  endDate,
  endTime,
}: RaffleModalProps) => {
  const {
    raffleTimes,
    drawRequest,
    handleStartTimeChange,
    handleEndTimeChange,
  } = useRaffleRequest({
    startDate,
    startTime,
    endDate,
    endTime,
  });

  if (!isOpen) return null;

  return (
    <div className='left-[780px] top-[635px] flex fixed inset-0  w-fit h-[175px] flex-row'>
      <Modal
        handleCloseClick={handleClose}
        handleButtonClick={() => handleSave(drawRequest)}
      >
        <div className='flex flex-row mx-4 '>
          <div className='flex flex-row'>
            <div className='space-y-2 mr-16 my-auto'>
              <div className='flex flex-row space-x-2'>
                <p>오픈 시간</p>
                <div className='relative flex items-center group'>
                  <img
                    src={`/svg/경고.svg`}
                    alt='Warning'
                    className='h-6 w-6 cursor-pointer'
                  />
                  <div className='absolute bottom-full mb-2 hidden group-hover:block w-max bg-gray-700 text-white text-xs rounded-md p-2'>
                    오픈 시간은 오전 9시부터 가능합니다.
                  </div>
                </div>
              </div>
              <TimePicker
                date={raffleTimes.startRaffleTime}
                onChange={handleStartTimeChange}
              />
            </div>
            <div className='space-y-2 ml-4 my-auto'>
              <p>종료 시간</p>
              <TimePicker
                date={raffleTimes.endRaffleTime}
                onChange={handleEndTimeChange}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RaffleModal;

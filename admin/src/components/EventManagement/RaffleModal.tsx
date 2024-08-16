'use client';
import { TimePicker } from '@/components/ui/datetime-picker';
import Modal from '@/components/common/Modal';
import { useRaffleRequest } from '@/hooks/useRaffleRequest';
import { DrawRequest } from '@/type/eventManagement/eventType';

interface RaffleModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSave: (body: DrawRequest) => void;
}

const RaffleModal = ({ isOpen, handleClose, handleSave }: RaffleModalProps) => {
  const {
    raffleTimes,
    drawRequest,
    handleStartTimeChange,
    handleEndTimeChange,
  } = useRaffleRequest();

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
              <p>오픈 시간</p>
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

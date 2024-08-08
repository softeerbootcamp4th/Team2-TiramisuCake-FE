'use client';
import { useState } from 'react';
import { TimePicker } from '@/components/ui/datetime-picker';
import Modal from '@/components/common/Modal';

interface RaffleModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSave: () => void;
}

const RaffleModal = ({ isOpen, handleClose, handleSave }: RaffleModalProps) => {
  const [startRaffletime, setStartRaffleTime] = useState<Date | undefined>(
    undefined
  );
  const [endRaffletime, setEndRaffleTime] = useState<Date | undefined>(
    undefined
  );

  if (!isOpen) return null;

  return (
    <div className='fixed bottom-[44px] right-[319px] flex w-fit h-[175px] flex-row'>
      <Modal handleCloseClick={handleClose} handleButtonClick={handleSave}>
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
              <TimePicker date={endRaffletime} onChange={setEndRaffleTime} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RaffleModal;

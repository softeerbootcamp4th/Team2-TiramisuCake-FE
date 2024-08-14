'use client';
import { useEffect, useState } from 'react';
import { TimePicker } from '@/components/ui/datetime-picker';
import Modal from '@/components/common/Modal';
import { format, setHours, setMinutes } from 'date-fns';
import { DrawRequest } from '@/types/eventType';

interface RaffleModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSave: (body: DrawRequest) => void;
}

const initRequest: DrawRequest = {
  startTime: format(new Date(), 'HH:mm:ss'),
  endTime: format(new Date(), 'HH:mm:ss'),
};
const initialRaffleTimes = {
  startRaffleTime: undefined as Date | undefined,
  endRaffleTime: undefined as Date | undefined,
};

const RaffleModal = ({ isOpen, handleClose, handleSave }: RaffleModalProps) => {
  const [raffleTimes, setRaffleTimes] = useState(initialRaffleTimes);

  const [drawRequest, setDrawRequest] = useState<DrawRequest>(initRequest);

  useEffect(() => {
    if (raffleTimes.startRaffleTime) {
      const twoHoursLater = new Date(raffleTimes.startRaffleTime);
      twoHoursLater.setHours(raffleTimes.startRaffleTime.getHours() + 2);

      const endOfDay = setMinutes(
        setHours(raffleTimes.startRaffleTime, 23),
        59
      );
      const finalEndTime = twoHoursLater > endOfDay ? endOfDay : twoHoursLater;

      setRaffleTimes((prevTimes) => ({
        ...prevTimes,
        endRaffleTime: finalEndTime,
      }));
    }
  }, [raffleTimes.startRaffleTime]);

  useEffect(() => {
    if (raffleTimes.startRaffleTime && raffleTimes.endRaffleTime) {
      setDrawRequest({
        startTime: format(raffleTimes.startRaffleTime, 'HH:mm:ss'),
        endTime: format(raffleTimes.endRaffleTime, 'HH:mm:ss'),
      });
    }
  }, [raffleTimes]);

  const handleStartTimeChange = (date: Date | undefined) => {
    if (date) {
      setRaffleTimes((prevTimes) => ({
        ...prevTimes,
        startRaffleTime: date,
      }));
    }
  };

  const handleEndTimeChange = (date: Date | undefined) => {
    if (date) {
      setRaffleTimes((prevTimes) => ({
        ...prevTimes,
        endRaffleTime: date,
      }));
    }
  };

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

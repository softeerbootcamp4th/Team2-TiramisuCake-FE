import Button from '@/components/common/Button/Button';
import EventInfoCard from './EventInfoCard';
import { ROUTER_PATH } from '@/constants/lib/constants';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLoginContext } from '@/store/context/useLoginContext';
import { EventInfo } from '@/types/main/eventInfoType';

interface FcfsInfoCardProps {
  fcfsInfo: string;
  eventInfo: EventInfo;
  fcfsStartTime: string;
}

const FcfsInfoCard = ({
  fcfsInfo,
  eventInfo,
  fcfsStartTime,
}: FcfsInfoCardProps) => {
  const { isLogined } = useLoginContext();
  const navigator = useNavigate();
  const [buttonText, setButtonText] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [_timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    if (fcfsStartTime) {
      const startTime = new Date(fcfsStartTime);
      const updateCounter = () => {
        const now = new Date();
        const timeDiff = startTime.getTime() - now.getTime();

        setTimeRemaining(timeDiff);

        if (timeDiff <= 10 * 60 * 1000 && timeDiff > 0) {
          setIsActive(false);
          const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
          const seconds = Math.floor((timeDiff / 1000) % 60);
          setButtonText(
            `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`
          );
        } else if (timeDiff <= 0) {
          setIsActive(true);
          setButtonText('바로가기');
        } else {
          setIsActive(false);
          setButtonText('바로가기');
        }
      };

      updateCounter();

      // 1초마다 updateCounter 실행
      const intervalId = setInterval(updateCounter, 1000);
      return () => clearInterval(intervalId);
    }
  }, [fcfsStartTime]);

  const goQuizLounge = () => {
    navigator(`${ROUTER_PATH.QUIZ_LOUNGE}?mode=live`);
  };

  const goTutorialQuizLounge = () => {
    navigator(`${ROUTER_PATH.QUIZ_LOUNGE}?mode=tutorial`);
  };
  return (
    <div className='flex flex-col items-center'>
      <EventInfoCard fcfsInfo={fcfsInfo} eventInfo={eventInfo} />
      {isLogined && (
        <div className='flex gap-6 mt-6 '>
          <Button
            type='squareWithBorder'
            text='튜토리얼'
            handleClick={goTutorialQuizLounge}
          />
          <Button
            type='square'
            text={buttonText}
            handleClick={goQuizLounge}
            isActive={isActive}
          />
        </div>
      )}
    </div>
  );
};

export default FcfsInfoCard;

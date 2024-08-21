import { useEffect, useState } from 'react';

interface Props {
  isFcfsAvailable: boolean;
  nextFcfsStartTime: string;
}

const TWO_HOUR = 2 * 60 * 60 * 1000;

const useCountdownTimer = ({ isFcfsAvailable, nextFcfsStartTime }: Props) => {
  const [buttonText, setButtonText] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [_timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    if (nextFcfsStartTime) {
      const startTime = new Date(nextFcfsStartTime);

      const updateCounter = () => {
        const now = new Date();
        const timeDiff = startTime.getTime() - now.getTime();
        const timeSinceStart = now.getTime() - startTime.getTime();

        setTimeRemaining(timeDiff);

        if (timeDiff <= 10 * 60 * 1000 && timeDiff > 0) {
          setIsActive(false);
          const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
          const seconds = Math.floor((timeDiff / 1000) % 60);
          setButtonText(
            `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`
          );
        } else if (timeDiff <= 0 && timeSinceStart <= TWO_HOUR) {
          setIsActive(true);
          setButtonText('바로가기');
        } else if (timeSinceStart > TWO_HOUR) {
          setIsActive(false);
          setButtonText('바로가기');
        }
      };

      updateCounter();

      // 1초마다 updateCounter 실행
      const intervalId = setInterval(updateCounter, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isFcfsAvailable, nextFcfsStartTime]);

  return { buttonText, isActive };
};

export default useCountdownTimer;

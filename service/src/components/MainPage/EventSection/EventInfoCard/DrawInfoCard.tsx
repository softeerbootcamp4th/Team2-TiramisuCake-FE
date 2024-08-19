import Button from '@/components/common/Button/Button';
import EventInfoCard from './EventInfoCard';
import { useNavigate } from 'react-router-dom';
import { ROUTER_PATH } from '@/constants/lib/constants';
import { EventInfo } from '@/types/main/eventInfoType';
import { useLoginContext } from '@/store/context/useLoginContext';

interface DrawInfoCardProps {
  totalDrawWinner: string;
  remainDrawCount: string;
  eventInfo: EventInfo;
}

const DrawInfoCard = ({
  totalDrawWinner,
  remainDrawCount,
  eventInfo,
}: DrawInfoCardProps) => {
  const navigator = useNavigate();
  const { isLogined } = useLoginContext();

  const goLotteryLounge = () => {
    navigator(ROUTER_PATH.LOTTERY_LOUNGE);
  };
  return (
    <div className='flex flex-col items-center'>
      <EventInfoCard
        totalDrawWinner={totalDrawWinner}
        remainDrawCount={remainDrawCount}
        eventInfo={eventInfo}
      />
      {isLogined && (
        <div className='mt-6'>
          <Button
            type='square'
            text='복권 긁으러 가기'
            handleClick={goLotteryLounge}
          />
        </div>
      )}
    </div>
  );
};

export default DrawInfoCard;

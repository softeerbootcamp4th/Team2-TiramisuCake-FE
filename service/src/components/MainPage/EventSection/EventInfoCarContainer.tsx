import { SCROLL_MOTION } from '@/constants/animation';
import { useLoginContext } from '@/store/context/useLoginContext';
import { useModalContext } from '@/store/context/useModalContext';
import { EventResult } from '@/types/main/eventInfoType';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button/Button';
import FcfsInfoCard from './EventInfoCard/FcfsInfoCard';
import DrawInfoCard from './EventInfoCard/DrawInfoCard';

interface EventInfoCardContainer {
  result: EventResult;
}

const EventInfoCarContainer = ({ result }: EventInfoCardContainer) => {
  const { isLogined } = useLoginContext();
  const { setIsOpen } = useModalContext();

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {!isLogined && (
        <motion.div {...SCROLL_MOTION} className='flex mt-6 py-2 px-3'>
          <Button
            type='square'
            text='번호 인증하고 이벤트 참여하기'
            handleClick={handleOpenModal}
          ></Button>
        </motion.div>
      )}
      <div className={`${isLogined ? 'mt-12' : 'mt-9'}`}>
        <div className='flex items-center flex-row text-center'>
          {result.eventInfoList?.[0] && (
            <FcfsInfoCard
              fcfsInfo={result.fcfsInfo}
              eventInfo={result.eventInfoList[0]}
              fcfsStartTime={result.fcfsStartTime}
            />
          )}
          {result.eventInfoList?.[1] && (
            <DrawInfoCard
              totalDrawWinner={result.totalDrawWinner}
              remainDrawCount={result.remainDrawCount}
              eventInfo={result.eventInfoList[1]}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default EventInfoCarContainer;

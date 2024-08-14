import Badge from '@/components/common/Badge/Badge';
import { motion } from 'framer-motion';
import { SCROLL_MOTION } from '@/constants/animation';
import { EventInfo } from '@/types/main/eventInfoType';

export interface EventProps {
  fcfsInfo?: string;
  totalDrawWinner?: string;
  remainDrawCount?: string;
  eventInfo: EventInfo;
}

//todo : hint 존재 x
const EventInfoCard = ({
  fcfsInfo,
  totalDrawWinner,
  remainDrawCount,
  eventInfo,
}: EventProps) => {
  return (
    <motion.div
      {...SCROLL_MOTION}
      className='w-[36.5rem] h-[21.8rem] flex flex-col items-center justify-center p-6 border border-custom-white bg-gradient-to-b from-white/20 to-white/10 shadow-custom backdrop-blur-custom'
    >
      <div className='w-full'>
        {fcfsInfo && (
          <div className='text-center inline-flex flex-row justify-center gap-3'>
            <Badge type='lightblue' text={fcfsInfo} />
            <Badge type='white' text={`힌트: 인테리어`} />
          </div>
        )}
        {totalDrawWinner && (
          <div className='text-center inline-flex flex-row justify-center gap-3'>
            <Badge type='lightblue' text={`${totalDrawWinner}`} />
            <Badge type='lightblue' text={`${remainDrawCount}`} />
          </div>
        )}
        <h2 className=' text-b-xxl font-bold mt-2 mb-4 text-center text-gray-800'>
          {eventInfo.title}
        </h2>
        <p className='text-b-s font-Pretendard self-stretch text-gray-600 text-center whitespace-pre-wrap'>
          {eventInfo.content}
        </p>
      </div>
      <div className='flex justify-center items-center w-full h-full'>
        {[eventInfo.rewardImage1, eventInfo.rewardImage2].map((img, index) => (
          <div
            key={index}
            className='flex justify-center items-center w-full h-full'
          >
            <img
              src={img}
              alt={`image-${index}`}
              className='mx-4'
              style={{ width: '246px', height: '134px', objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default EventInfoCard;

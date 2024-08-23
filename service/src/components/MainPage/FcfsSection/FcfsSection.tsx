import Badge from '@/components/common/Badge/Badge';
import { useLoginContext } from '@/store/context/useLoginContext';
import { memo, useRef } from 'react';
import { motion } from 'framer-motion';
import { SCROLL_MOTION } from '@/constants/animation';
import { EventInfo } from '@/types/main/type';
import ButtonContainer from './ButtonContainer';

const backgroundImage =
  'https://d1wv99asbppzjv.cloudfront.net/main-page/event_bg_2.webp';
export interface EventProps {
  fcfsInfo: string;
  fcfsHint: string;
  eventInfo: EventInfo;
  fcfsStartTime: string | null;
}
const FcfsSection = ({
  fcfsInfo,
  fcfsHint,
  eventInfo,
  fcfsStartTime,
}: EventProps) => {
  const { isLogined } = useLoginContext();
  const fcfsSectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className={`snap-center bg-cover bg-center bg-no-repeat h-screen w-screen flex ${isLogined ? 'py-20' : 'py-32'} items-center justify-center`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      ref={fcfsSectionRef}
    >
      <div className='w-[1100px] flex h-full border border-custom-white bg-gradient-to-b from-white/20 to-white/10 shadow-custom backdrop-blur-custom'>
        <div className='flex flex-col gap-3 m-auto items-center'>
          <motion.div
            {...SCROLL_MOTION}
            className='text-center inline-flex flex-row justify-center gap-3'
          >
            <Badge type='lightblue' text={fcfsInfo} />
            <Badge type='white' text={`힌트: ${fcfsHint}`} />
          </motion.div>
          <motion.h2
            {...SCROLL_MOTION}
            className=' text-h-l font-bold mt-2 mb-4 text-center text-gray-800'
          >
            {eventInfo.title}
          </motion.h2>
          <motion.p
            {...SCROLL_MOTION}
            className='text-b-xl font-Pretendard self-stretch text-gray-600 text-center whitespace-pre-wrap'
          >
            {eventInfo.content}
          </motion.p>
          <div className='flex mt-20 gap-12 items-center justify-evenly w-full'>
            <motion.div
              {...SCROLL_MOTION}
              className='flex flex-col items-center gap-2'
            >
              <img src={eventInfo.rewardImage1} width={402} height={216} />
              <p className='font-semibold text-b-xl text-white'>
                {eventInfo.rewardName1}
              </p>
            </motion.div>
            <motion.div
              {...SCROLL_MOTION}
              className='flex flex-col items-center gap-2'
            >
              <img
                src={eventInfo.rewardImage2}
                width={402}
                height={216}
                className='object-cover'
              />
              <p className='font-semibold text-b-xl text-white'>
                {' '}
                {eventInfo.rewardName2}
              </p>
            </motion.div>
          </div>
          {isLogined && <ButtonContainer fcfsStartTime={fcfsStartTime} />}
        </div>
      </div>
    </section>
  );
};

export default memo(FcfsSection);

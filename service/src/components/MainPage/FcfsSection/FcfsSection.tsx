import Badge from '@/components/common/Badge/Badge';
import Button from '@/components/common/Button/Button';
import { ROUTER_PATH } from '@/constants/lib/constants';
import { useLoginContext } from '@/store/context/useLoginContext';
import { EventInfo } from '@/types/main/eventInfoType';
import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SCROLL_MOTION } from '@/constants/animation';
import useCountdownTimer from '@/hooks/MainPage/useCountdownTimer';

const backgroundImage =
  'https://d1wv99asbppzjv.cloudfront.net/main-page/event_bg_2.webp';
export interface EventProps {
  fcfsInfo: string;
  eventInfo: EventInfo;
  fcfsStartTime: string;
}
const FcfsSection = ({ fcfsInfo, eventInfo, fcfsStartTime }: EventProps) => {
  const { isLogined } = useLoginContext();
  const fcfsSectionRef = useRef<HTMLDivElement>(null);
  const navigator = useNavigate();
  const { buttonText, isActive } = useCountdownTimer(fcfsStartTime);

  const goQuizLounge = useCallback(() => {
    navigator(`${ROUTER_PATH.QUIZ_LOUNGE}?mode=live`);
  }, [navigator]);

  const goTutorialQuizLounge = useCallback(() => {
    navigator(`${ROUTER_PATH.QUIZ_LOUNGE}?mode=tutorial`);
  }, [navigator]);

  return (
    <section
      className='snap-start bg-cover bg-center bg-no-repeat w-screen h-screen flex py-16 justify-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
      ref={fcfsSectionRef}
    >
      <div className='w-[1100px] h-full my-auto flex flex-col items-center gap-4 px-6 pt-12 border border-custom-white bg-gradient-to-b from-white/20 to-white/10 shadow-custom backdrop-blur-custom'>
        <motion.div
          {...SCROLL_MOTION}
          className='text-center inline-flex flex-row justify-center gap-3'
        >
          <Badge type='lightblue' text={fcfsInfo} />
          <Badge type='white' text={`힌트: 인테리어`} />
        </motion.div>
        <motion.h2
          {...SCROLL_MOTION}
          className=' text-h-l font-bold mt-2 mb-4 text-center text-gray-800'
        >
          Event 1. {eventInfo.title}
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
            <img src='/rent.png' />
            <p className='font-semibold text-b-xl text-white'>
              The new IONIQ 5 24시간 무료 승차 쿠폰
            </p>
          </motion.div>
          <motion.div
            {...SCROLL_MOTION}
            className='flex flex-col items-center gap-2'
          >
            <img src='/coupon.png' className='w-[400px] h-[214px]' />
            <p className='font-semibold text-b-xl text-white'>신차 할인 쿠폰</p>
          </motion.div>
        </div>
        {isLogined && (
          <div className='flex gap-6 mt-20 '>
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
    </section>
  );
};

export default FcfsSection;

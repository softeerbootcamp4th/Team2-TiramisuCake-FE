import Badge from '@/components/common/Badge/Badge';
import { useNavigate } from 'react-router-dom';
import { ROUTER_PATH } from '@/constants/lib/constants';
import { useLoginContext } from '@/store/context/useLoginContext';
import Button from '@/components/common/Button/Button';
import { motion } from 'framer-motion';
import { SCROLL_MOTION } from '@/constants/animation';
import { EventInfo } from '@/types/main/type';
import { memo, useCallback, useEffect, useState } from 'react';
import { useEventDateContext } from '@/store/context/useEventDateContext';
import NotEventPeriodPage from '@/components/ErrorPage/NotEventPeriodPage';

const backgroundImage =
  'https://d1wv99asbppzjv.cloudfront.net/main-page/event_bg_3.webp';

export interface EventProps {
  drawInfo: string;
  totalDrawWinner: string;
  remainDrawCount: string;
  eventInfo: EventInfo;
  drawStartTime: string;
  drawEndTime: string;
}
const DrawSection = ({
  drawInfo,
  totalDrawWinner,
  remainDrawCount,
  eventInfo,
  drawStartTime,
  drawEndTime,
}: EventProps) => {
  const { startDate, endDate } = useEventDateContext();
  const today = new Date();
  const navigator = useNavigate();
  const { isLogined } = useLoginContext();

  const checkDrawPeriod = useCallback(() => {
    const startPeriod = new Date(startDate);
    const endPeriod = new Date(endDate);
    const drawStartDateTime = new Date(today);
    const [startHour, startMinute] = drawStartTime.split(':').map(Number);
    drawStartDateTime.setHours(startHour, startMinute, 0, 0);

    const drawEndDateTime = new Date(today);
    const [endHour, endMinute] = drawEndTime.split(':').map(Number);
    drawEndDateTime.setHours(endHour, endMinute, 0, 0);

    // 조건을 체크하여 결과를 반환
    if (
      today >= startPeriod &&
      today <= endPeriod &&
      today >= drawStartDateTime &&
      today <= drawEndDateTime
    ) {
      return true;
    } else {
      return false;
    }
  }, [startDate, endDate, drawStartTime, drawEndTime, today]);

  const [isDrawPeriod, setIsDrawPeriod] = useState(false);

  useEffect(() => {
    const isPeriod = checkDrawPeriod();
    setIsDrawPeriod(isPeriod);
  }, [checkDrawPeriod]);

  const goLotteryLounge = useCallback(() => {
    if (isDrawPeriod) {
      navigator(ROUTER_PATH.LOTTERY_LOUNGE);
    } else {
      return <NotEventPeriodPage />;
    }
  }, [isDrawPeriod, navigator]);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={`snap-center bg-cover bg-center bg-no-repeat h-screen w-screen flex ${isLogined ? 'py-[4rem]' : 'py-[6.5rem]'} items-center justify-center`}
    >
      <div className='w-[1100px] h-full flex border border-custom-white bg-gradient-to-b from-white/20 to-white/10 shadow-custom backdrop-blur-custom'>
        <div className='flex flex-col items-center m-auto gap-3'>
          <motion.div
            {...SCROLL_MOTION}
            className='text-center inline-flex flex-row justify-center gap-3'
          >
            <Badge type='white' text={`${drawInfo}`} />
            <Badge type='lightblue' text={`${totalDrawWinner}`} />
            <Badge type='lightblue' text={`${remainDrawCount}`} />
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
          <div className='flex mt-6 gap-12 items-center justify-evenly w-full'>
            <motion.div
              {...SCROLL_MOTION}
              className='flex flex-col items-center gap-1'
            >
              <img
                src={eventInfo.rewardImage1}
                alt='경품1'
                width={218}
                height={244}
              />
              <p className='font-semibold text-b-xl text-white'>
                {eventInfo.rewardName1}
              </p>
            </motion.div>
            <div className='flex flex-col gap-4'>
              <motion.div
                {...SCROLL_MOTION}
                className='flex flex-col items-center gap-1'
              >
                <img
                  src={eventInfo.rewardImage2}
                  alt='경품 2'
                  className='w-[21.875rem] h-[9.375rem] object-fit'
                />
                <p className='font-semibold text-b-xl text-white'>
                  {eventInfo.rewardName2}
                </p>
              </motion.div>
              <motion.div
                {...SCROLL_MOTION}
                className='flex flex-col items-center gap-1'
              >
                <img
                  src={eventInfo.rewardImage3 as string}
                  className='w-[21.875rem] h-[9.375rem]'
                  alt='경품 3'
                />
                <p className='font-semibold text-b-xl text-white'>
                  {eventInfo.rewardName3}
                </p>
              </motion.div>
            </div>
          </div>

          {isLogined && (
            <div className='mt-5'>
              <Button
                type='square'
                text='복권 긁으러 가기'
                isActive={isDrawPeriod}
                handleClick={goLotteryLounge}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(DrawSection);

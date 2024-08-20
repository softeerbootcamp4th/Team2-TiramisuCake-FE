import Badge from '@/components/common/Badge/Badge';
import { EventInfo } from '@/types/main/eventInfoType';
import { useNavigate } from 'react-router-dom';
import { ROUTER_PATH } from '@/constants/lib/constants';
import { useLoginContext } from '@/store/context/useLoginContext';
import Button from '@/components/common/Button/Button';
import { motion } from 'framer-motion';
import { SCROLL_MOTION } from '@/constants/animation';

const backgroundImage =
  'https://d1wv99asbppzjv.cloudfront.net/main-page/event_bg_3.webp';

export interface EventProps {
  totalDrawWinner: string;
  remainDrawCount: string;
  eventInfo: EventInfo;
}
const DrawSection = ({
  totalDrawWinner,
  remainDrawCount,
  eventInfo,
}: EventProps) => {
  const navigator = useNavigate();
  const { isLogined } = useLoginContext();

  const goLotteryLounge = () => {
    navigator(ROUTER_PATH.LOTTERY_LOUNGE);
  };

  return (
    <div
      className='snap-center bg-cover bg-center bg-no-repeat h-screen w-screen flex py-16 items-center justify-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='w-[1100px] h-full my-auto flex flex-col items-center gap-4 px-6 py-8 border border-custom-white bg-gradient-to-b from-white/20 to-white/10 shadow-custom backdrop-blur-custom'>
        <motion.div
          {...SCROLL_MOTION}
          className='text-center inline-flex flex-row justify-center gap-3'
        >
          <Badge type='lightblue' text={`${totalDrawWinner}`} />
          <Badge type='lightblue' text={`${remainDrawCount}`} />{' '}
        </motion.div>
        <motion.h2
          {...SCROLL_MOTION}
          className=' text-h-l font-bold mt-2 mb-4 text-center text-gray-800'
        >
          Event 2. {eventInfo.title}
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
            <img src='/ipad.svg' alt='경품1' />
            <p className='font-semibold text-b-xl text-white'>
              1등 최신형 아이패드
            </p>
          </motion.div>
          <div className='flex flex-col gap-4'>
            <motion.div
              {...SCROLL_MOTION}
              className='flex flex-col items-center gap-1'
            >
              <img src='/10.png' className='w-[350px] h-[150px]' />
              <p className='font-semibold text-b-xl text-white'>
                2등 현대백화점 10만원권
              </p>
            </motion.div>
            <motion.div
              {...SCROLL_MOTION}
              className='flex flex-col items-center gap-1'
            >
              <img src='/5.png' className='w-[350px] h-[150px]' />
              <p className='font-semibold text-b-xl text-white'>
                3등 현대백화점 5만원권
              </p>
            </motion.div>
          </div>
        </div>

        {isLogined && (
          <div>
            <Button
              type='square'
              text='복권 긁으러 가기'
              handleClick={goLotteryLounge}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DrawSection;

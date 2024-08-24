import { memo } from 'react';
import { motion } from 'framer-motion';
import { SCROLL_MOTION } from '@/constants/animation';
import Button from '@/components/common/Button/Button';
import LoadingPage from '@/components/Loading/Loading';
import Bouncing from '@/components/common/Bouncing/Bouncing';
import LoginModal from '../EventSection/LoginModal/LoginModal';
import FcfsInfoContainer from './FcfsInfoContainer';
import DrawInfoContainer from './DrawInfoContainer';
import { useEventIntroduction } from '@/hooks/MainPage/useEventIntroduction';

const downArrow = '/svg/BigArrow.svg';
const backgroundImage =
  'https://d1wv99asbppzjv.cloudfront.net/main-page/event_bg_1.webp';

const EventIntroductionSection = () => {
  const {
    isLoading,
    isOpen,
    isLogined,
    startDate,
    endDate,
    staticData,
    text,
    handleModal,
    handleArrowClick,
  } = useEventIntroduction();

  if (isLoading) return <LoadingPage />;
  return (
    <section
      className='snap-start bg-cover bg-center bg-no-repeat h-screen min-w-screen flex flex-col gap-6 items-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-[99] backdrop-blur-sm'>
          <LoginModal />
        </div>
      )}
      <div className='w-full px-32 my-auto flex flex-col gap-3'>
        <div className='flex flex-col items-center gap-3 pt-5 mt-3'>
          <motion.span className='text-center font-Pretendard text-green-500 font-medium text-b-xl'>
            {startDate}-{endDate}
          </motion.span>
          <motion.div
            {...SCROLL_MOTION}
            className='font-bold text-h-l self-stretch text-center text-gray-900 line-height-[3.375rem]'
          >
            {staticData?.result.eventTitle}
          </motion.div>

          <motion.div
            {...SCROLL_MOTION}
            className='font-Pretendard text-b-xl font-normal text-gray-800 text-center whitespace-pre-wrap'
          >
            {staticData?.result.eventDescription!}
          </motion.div>
          {!isLogined && (
            <motion.div {...SCROLL_MOTION} className='flex py-2 px-3'>
              <Button
                type='square'
                text='번호 인증하고 이벤트 참여하기'
                handleClick={handleModal}
              ></Button>
            </motion.div>
          )}
        </div>

        <div className='flex flex-col items-center gap-3 w-full'>
          <motion.div {...SCROLL_MOTION} className='text-h-m font-bold '>
            참여 안내
          </motion.div>
          <div className='flex w-full mx-auto justify-center'>
            <FcfsInfoContainer
              title={staticData?.result.eventInfoList[0].title as string}
              text={text as string}
            />
            <DrawInfoContainer
              title={staticData?.result.eventInfoList[1].title as string}
            />
          </div>
          <Bouncing>
            <div
              onClick={handleArrowClick}
              className={`hover:cursor-pointer ${isLogined ? 'mt-6' : ''}`}
            >
              <p className='text-white text-b-m font-semibold'>자세히 보기</p>
              <img
                src={downArrow}
                alt='arrow'
                className='mt-1.5'
                width={72}
                height={22}
              />
            </div>
          </Bouncing>
        </div>
      </div>
    </section>
  );
};

export default memo(EventIntroductionSection);

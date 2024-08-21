import { useDynamicEventInfo, useStaticEventInfo } from '@/apis/main/query';
import {
  useEventDateContext,
  useEventDateSetterContext,
} from '@/store/context/useEventDateContext';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SCROLL_MOTION } from '@/constants/animation';
import { useLoginContext } from '@/store/context/useLoginContext';
import { useModalContext } from '@/store/context/useModalContext';
import Button from '@/components/common/Button/Button';
import LoadingPage from '@/components/Loading/Loading';
import Bouncing from '@/components/common/Bouncing/Bouncing';
import LoginModal from './EventSection/LoginModal/LoginModal';
import scrollToElementId from '@/utils/scrollToElementId';
import { useTabContext } from '@/store/context/useTabContext';

const downArrow = '/svg/BigArrow.svg';
const backgroundImage =
  'https://d1wv99asbppzjv.cloudfront.net/main-page/event_bg_1.webp';

const EventIntroductionSection = () => {
  const { staticData, isStaticLoading } = useStaticEventInfo();
  const { dynamicData, isDynamicLoading } = useDynamicEventInfo();
  const isLoading = isStaticLoading || isDynamicLoading;
  const { setActiveTab } = useTabContext();

  const { isLogined } = useLoginContext();
  const { isOpen, setIsOpen } = useModalContext();

  const { startDate, endDate } = useEventDateContext();
  const { setStartDate, setEndDate } = useEventDateSetterContext();

  useEffect(() => {
    if (!isDynamicLoading && dynamicData) {
      setStartDate(dynamicData.result.startDate);
      setEndDate(dynamicData.result.endDate);
    }
  }, [isDynamicLoading, staticData]);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleArrowClick = () => {
    scrollToElementId({ sectionId: 'fcfs', behavior: 'smooth' });
    setActiveTab('fcfs');
  };

  if (isLoading) return <LoadingPage />;
  return (
    <section
      className='snap-start bg-cover bg-center bg-no-repeat h-screen min-w-screen flex flex-col gap-6 items-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-[99] backdrop-blur-sm'>
          <LoginModal onClose={handleModal} />
        </div>
      )}
      <div className='flex flex-col items-center gap-5 pt-5 mt-12'>
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

      <div className='flex flex-col items-center gap-8 w-full px-32'>
        <motion.div {...SCROLL_MOTION} className='text-h-m font-bold '>
          참여 안내
        </motion.div>
        <div className='flex w-full justify-evenly'>
          <motion.div
            {...SCROLL_MOTION}
            className='flex flex-col items-center gap-4 w-full bg-gradient-to-b from-white/20 to-white/10 shadow-custom backdrop-blur-custom px-5 py-16'
          >
            <div className='text-h-m font-bold text-hyundai'>
              '24시 내 차' 이벤트
            </div>
            <div className='flex gap-5 w-full justify-evenly mt-10 items-center'>
              <div className='flex flex-col items-center gap-6'>
                <img className='w-[6.25rem] h-[6.25rem]' src='/word.png' />
                <p className='text-b-xl font-semibold text-white'>
                  매주 ?요일 ??시 선착순 퀴즈
                </p>
              </div>
              <img src='/svg/right_arrow.svg' className=' w-[70px] h-[70px]' />

              <div className='flex flex-col items-center gap-6'>
                <img
                  className='w-[6.25rem] h-[6.25rem]'
                  src='/surprise-box.png'
                />
                <p className='text-b-xl font-semibold text-white '>
                  단어 맞추고 선물 받기
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            {...SCROLL_MOTION}
            className='flex flex-col items-center gap-4 w-full bg-gradient-to-b from-white/20 to-white/10 shadow-custom backdrop-blur-custom px-5 py-16'
          >
            <div className='text-h-m font-bold text-hyundai'>
              매일 복권 긁고 경품 받기
            </div>
            <div className='flex w-full justify-evenly mt-10 items-center'>
              <div className='flex flex-col items-center gap-6'>
                <img className='w-[6.25rem] h-[6.25rem]' src='/draw.png' />
                <p className='text-b-xl font-semibold text-white'>
                  매일 한 번씩 복권 긁기
                </p>
              </div>
              <img src='/svg/right_arrow.svg' className=' w-[70px] h-[70px]' />
              <div className='flex flex-col items-center gap-6'>
                <img className='w-[5rem] h-[5rem] mt-2' src='/link.png' />
                <p className='text-b-xl font-semibold mt-5 text-white'>
                  나만의 Url 공유
                </p>
              </div>
              <img src='/svg/right_arrow.svg' className=' w-[70px] h-[70px]' />

              <div className='flex flex-col items-center gap-6'>
                <img className='w-[6.25rem] h-[6.25rem]' src='/ticket.png' />
                <p className='text-b-xl font-semibold text-white'>
                  복권 기회 추가
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Bouncing>
        <div
          onClick={handleArrowClick}
          className={`hover:cursor-pointer ${isLogined ? 'mt-6' : ''}`}
        >
          <p className='text-white text-b-m font-semibold'>자세히 보기</p>
          <img src={downArrow} alt='arrow' className='mt-1.5' />
        </div>
      </Bouncing>
    </section>
  );
};

export default EventIntroductionSection;

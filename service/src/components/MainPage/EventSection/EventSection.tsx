import { useEffect } from 'react';
import LoginModal from './LoginModal/LoginModal';
import Bouncing from '@/components/common/Bouncing/Bouncing';
import { motion } from 'framer-motion';
import { SCROLL_MOTION } from '@/constants/animation';
import { useEventDateContext } from '@/store/context/useEventDateContext';
import { useStaticEventInfo, useDynamicEventInfo } from '@/apis/main/query';
import { useModalContext } from '@/store/context/useModalContext';
import LoadingPage from '@/components/Loading/Loading';
import EventInfoCarContainer from './EventInfoCarContainer';
import { EventResult } from '@/types/main/eventInfoType';

interface EventSectionProps {
  onArrowClick: () => void;
}

const downArrow = '/svg/downarrow.svg';
const backgroundImage =
  'https://d1wv99asbppzjv.cloudfront.net/main-page/event_section_bg.webp';

const EventSection = ({ onArrowClick }: EventSectionProps) => {
  const { staticData, isStaticLoading } = useStaticEventInfo();
  const { dynamicData, isDynamicLoading } = useDynamicEventInfo();
  const isLoading = isStaticLoading || isDynamicLoading;

  const mergedResult: EventResult | undefined =
    staticData?.result && dynamicData?.result
      ? {
          startDate: dynamicData.result.startDate,
          endDate: dynamicData.result.endDate,
          eventTitle: staticData.result.eventTitle,
          eventDescription: staticData.result.eventDescription,
          fcfsInfo: dynamicData.result.fcfsInfo,
          totalDrawWinner: dynamicData.result.totalDrawWinner,
          remainDrawCount: dynamicData.result.remainDrawCount,
          fcfsHint: dynamicData.result.fcfsHint,
          fcfsStartTime: dynamicData.result.fcfsStartTime,
          eventInfoList: staticData.result.eventInfoList,
        }
      : undefined;

  const { startDate, endDate, setStartDate, setEndDate } =
    useEventDateContext();
  const { isOpen, setIsOpen } = useModalContext();

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isDynamicLoading && dynamicData) {
      setStartDate(dynamicData.result.startDate);
      setEndDate(dynamicData.result.endDate);
    }
  }, [isDynamicLoading, staticData]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div
      className='bg-cover bg-center bg-no-repeat min-h-screen min-w-screen flex items-center justify-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-[99] backdrop-blur-sm'>
          <LoginModal onClose={handleCloseModal} />
        </div>
      )}
      <div className='flex flex-col w-[73rem] items-center h-[41.6rem] justify-center'>
        <div className='flex flex-col self-stretch items-center my-4'>
          <span className='text-center font-Pretendard text-green-500 font-medium text-b-m'>
            {startDate}-{endDate}
          </span>
          <motion.div
            {...SCROLL_MOTION}
            className='font-bold text-h-l self-stretch text-center text-gray-900 line-height-[3.375rem]'
          >
            {staticData?.result.eventTitle}
          </motion.div>
        </div>
        <motion.div
          {...SCROLL_MOTION}
          className='font-Pretendard text-b-xl font-normal text-gray-800 text-center whitespace-pre-wrap'
        >
          {staticData?.result.eventDescription!}
        </motion.div>
        <EventInfoCarContainer result={mergedResult!} />
        <div className='mt-auto'>
          <Bouncing>
            <img
              className='hover:cursor-pointer mt-6 '
              src={downArrow}
              alt='arrow'
              onClick={onArrowClick}
            />
          </Bouncing>
        </div>
      </div>
    </div>
  );
};
export default EventSection;

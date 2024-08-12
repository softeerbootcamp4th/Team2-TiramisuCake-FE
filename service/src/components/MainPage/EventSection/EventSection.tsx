import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/Button/Button';
import EventInfoCard from './EventInfoCard/EventInfoCard';
import LoginModal from './LoginModal/LoginModal';
import { useLoginContext } from '@/store/context/useLoginContext';
import Bouncing from '@/components/common/Bouncing/Bouncing';
import { motion } from 'framer-motion';
import { SCROLL_MOTION } from '@/constants/animation';
import { useEventDateContext } from '@/store/context/useEventDateContext';
import { useEventInfo } from '@/apis/main/query';
import { ROUTER_PATH } from '@/constants/lib/constants';

interface EventSectionProps {
  onArrowClick: () => void;
}

const downArrow = '/svg/downarrow.svg';
const backgroundImage = 'image158.png';

const EventSection = ({ onArrowClick }: EventSectionProps) => {
  const { isLogined } = useLoginContext();
  const { data, isLoading } = useEventInfo();

  const { startDate, endDate, setStartDate, setEndDate } =
    useEventDateContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigator = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const goQuizLounge = () => {
    navigator(ROUTER_PATH.QUIZ_LOUNGE);
  };
  const goLotteryLounge = () => {
    navigator(ROUTER_PATH.LOTTERY_LOUNGE);
  };
  useEffect(() => {
    if (!isLoading && data) {
      setStartDate(data.result.startDate);
      setEndDate(data.result.endDate);
    }
  }, [isLoading, data]);

  if (isLoading) {
    return (
      <h1 className='text-h-m text-center justify-center'>
        ...잠시만 기다려주세요.
      </h1>
    );
  }

  return (
    <div
      className='bg-cover bg-center bg-no-repeat min-h-screen min-w-screen flex items-center justify-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {isModalOpen && (
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
            {data?.result.eventTitle}
          </motion.div>
        </div>
        <motion.div
          {...SCROLL_MOTION}
          className='font-Pretendard text-b-xl font-normal text-gray-800 text-center whitespace-pre-wrap'
        >
          {data?.result.eventDescription!}
        </motion.div>
        {isLogined ? (
          <div className='my-8'>
            <div className='flex items-center flex-row text-center'>
              {data?.result.eventInfoList?.[0] && (
                <EventInfoCard
                  fcfsInfo={data?.result.fcfsInfo}
                  eventInfo={data.result.eventInfoList[0]}
                />
              )}
              {data?.result.eventInfoList?.[1] && (
                <EventInfoCard
                  totalDrawWinner={data?.result.totalDrawWinner}
                  remainDrawCount={data?.result.remainDrawCount}
                  eventInfo={data.result.eventInfoList[1]}
                />
              )}
            </div>
            <div className='mt-6 flex flex-row mx-6'>
              <div className='ml-[180px] mr-6'>
                <Button
                  type='squareWithBorder'
                  text='튜토리얼'
                  handleClick={goQuizLounge}
                />
              </div>
              <div className='mr-[435px]'>
                <Button
                  type='square'
                  text='바로가기'
                  handleClick={goQuizLounge}
                />
              </div>
              <div>
                <Button
                  type='square'
                  text='복권 긁으러 가기'
                  handleClick={goLotteryLounge}
                />
              </div>
            </div>
          </div>
        ) : (
          <>
            <motion.div {...SCROLL_MOTION} className='flex my-6 py-2 px-3'>
              <Button
                type='square'
                text='번호 인증하고 이벤트 참여하기'
                handleClick={handleOpenModal}
              ></Button>
            </motion.div>
            <div className='flex items-center flex-row text-center'>
              {data?.result.eventInfoList?.[0] && (
                <EventInfoCard
                  fcfsInfo={data?.result.fcfsInfo}
                  eventInfo={data.result.eventInfoList[0]}
                />
              )}
              {data?.result.eventInfoList?.[1] && (
                <EventInfoCard
                  totalDrawWinner={data?.result.totalDrawWinner}
                  remainDrawCount={data?.result.remainDrawCount}
                  eventInfo={data.result.eventInfoList[1]}
                />
              )}
            </div>
          </>
        )}
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

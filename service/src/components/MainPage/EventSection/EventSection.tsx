import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import splitSentences from '@/utils/splitSentence';
import Button from '@/components/common/Button/Button';
import EventInfoCard from './EventInfoCard/EventInfoCard';
import LoginModal from './LoginModal/LoginModal';
import { useLoginContext } from '@/store/context/useLoginContext';
import { LoginModalProvider } from '@/store/context/loginModalContext';

interface EventSectionProps {
  startDate: string;
  endDate: string;
  onArrowClick: () => void;
}

const downArrow = '/svg/downarrow.svg';
const backgroundImage = 'image158.png';
const title = '신차 출시 기념 EVENT';
const description =
  '현대자동차의 The new IONIQ 5 출시 기념 이벤트로 여러분을 초대합니다. 24시간 무료 렌트, 신차 할인 쿠폰 및 다양한 경품을 받아보세요.';

const informs = [
  {
    when: '매주 월,목 오전 10시 선착순 100명',
    hint: '인테리어',
    title: "'24시간 내차' 이벤트",
    eventInformation:
      '하단의 The new IONIQ 5 정보를 바탕으로 빠르게 문장 퀴즈를 맞춰 \n 24시간 렌트권과 신차 할인권을 얻을 수 있어요.',
    imageUrl: ['/image 162.png', '/image 163.png'],
  },
  {
    winner: '1555명',
    remaining: '1554개',
    title: '매일 복권 긁고 경품 받기',
    eventInformation:
      '이벤트 기간 동안 추첨을 통해 아이패드 pro 11인치, 현대백화점 10만원권, 1만원권을 드려요. 일주일 연속 참여 시, 스타벅스 쿠폰을 무조건 받을 수 있어요.',
    imageUrl: ['svg/ipad.svg', 'svg/money.svg'],
  },
];

const EventSection = ({
  startDate,
  endDate,
  onArrowClick,
}: EventSectionProps) => {
  const { isLogined } = useLoginContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigator = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const goQuizLounge = () => {
    navigator('/quiz-lounge');
  };
  const goLotteryLounge = () => {
    navigator('/lottery-lounge');
  };

  return (
    <div
      className='bg-cover bg-center bg-no-repeat min-h-screen min-w-screen flex items-center justify-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-[99] backdrop-blur-sm'>
          <LoginModalProvider>
            <LoginModal onClose={handleCloseModal} />
          </LoginModalProvider>
        </div>
      )}
      <div className='flex flex-col w-[73rem] items-center h-[41.6rem] justify-center'>
        <div className='flex flex-col self-stretch items-center my-4'>
          <span className='text-center font-Pretendard text-green-500 font-medium text-b-m'>
            {startDate}-{endDate}
          </span>
          <div className='font-bold text-[2.25rem] self-stretch text-center text-gray-900 line-height-[3.375rem]'>
            {title}
          </div>
        </div>
        <div className=' font-Pretendard font-normal text-gray-800 text-center'>
          {splitSentences(description)}
        </div>
        {isLogined ? (
          <div className='my-8'>
            <div className='flex items-center flex-row text-center'>
              {informs.map((inform, index) => (
                <EventInfoCard key={index} {...inform} />
              ))}
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
            <div className='flex my-6 py-2 px-3'>
              <Button
                type='square'
                text='번호 인증하고 이벤트 참여하기'
                handleClick={handleOpenModal}
              ></Button>
            </div>
            <div className='flex items-center flex-row text-center'>
              {informs.map((inform, index) => (
                <EventInfoCard key={index} {...inform} />
              ))}
            </div>
          </>
        )}

        <img
          className='mt-auto hover:cursor-pointer '
          src={downArrow}
          alt='arrow'
          onClick={onArrowClick}
        />
      </div>
    </div>
  );
};
export default EventSection;

import Button from '@/components/common/Button/Button';
import ExitModal from '@/components/common/Modal/ExitModal/ExitModal';
import Attendance from '@/components/LotteryLounge/Attendance';
import LotteryCanvas from '@/components/LotteryLounge/LotteryCanvas';
import { useEffect } from 'react';
import { useBlocker } from 'react-router-dom';

const backgroundImage = '/images/draw_bg.webp';
const sample = () => {
  console.log('아직 api 연결 x');
};

const linkcount = 2;
const todayleft = 3;

const LotteryLoungePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      currentLocation.pathname !== nextLocation.pathname
  );

  return (
    <div>
      <div
        className='bg-cover bg-center bg-no-repeat min-h-screen min-w-screen flex items-center justify-center'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className='flex w-[49rem] flex-col items-center gap-8'>
          <div className='self-stretch items-center justify-center flex-col flex gap-4'>
            <Button
              type='square'
              text={`내가 초대한 친구 ${linkcount}회 | 오늘의 복권 기회 ${todayleft}회`}
              handleClick={sample}
            />
            <div className='text-center'>
              <div className='font-semibold text-h-m mb-2'>
                복권을 통해 <span className='text-primary'>나의 경품</span>을
                확인하세요!
              </div>
              <div className='text-gray-600 text-b-m'>
                같은 모양이 연달아 3개 나올 시 랜덤으로 경품에 당첨돼요
              </div>
            </div>
          </div>
          <div className='relative w-[784px] h-[400px]'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 flex justify-center items-center gap-8'>
              <img src='/svg/복권진함/다이아.svg' alt='SVG 1' />
              <img src='/svg/복권진함/다이아.svg' alt='SVG 2' />
              <img src='/svg/복권진함/다이아.svg' alt='SVG 3' />
            </div>
            <LotteryCanvas />
          </div>
          <Attendance />
        </div>
      </div>
      {blocker.state === 'blocked' && (
        <ExitModal
          handleClose={() => blocker.reset()}
          handleCancel={() => blocker.reset()}
          handleConfirm={() => blocker.proceed()}
        />
      )}
    </div>
  );
};
export default LotteryLoungePage;

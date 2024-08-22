import { useQueryGetDrawAttendance } from '@/apis/draw/query';
import Button from '@/components/common/Button/Button';
import ExitModal from '@/components/common/Modal/ExitModal/ExitModal';
import Attendance from '@/components/LotteryLounge/Attendance';
import LotteryCanvas from '@/components/LotteryLounge/LotteryCanvas';
import { getCookie } from '@/utils/cookie';
import { useEffect, useState } from 'react';
import { useBlocker } from 'react-router-dom';
import { DrawResultResponse } from '@/types/lottery/type';
import { useTabContext } from '@/store/context/useTabContext';
import LoadingPage from '@/components/Loading/Loading';

const backgroundImage =
  'https://d1wv99asbppzjv.cloudfront.net/main-page/draw_bg.webp';

const sample = () => {};

const LotteryLoungePage = () => {
  const token = getCookie('accessToken');
  const { data, isLoading } = useQueryGetDrawAttendance(token);
  const [drawResult, setDrawResult] = useState<DrawResultResponse | null>(null);
  const { setActiveTab } = useTabContext();
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab('quiz');
  }, []);

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      currentLocation.pathname !== nextLocation.pathname
  );

  useEffect(() => {
    if (blocker.state === 'blocked') setIsExitModalOpen(true);
    else setIsExitModalOpen(false);
  }, [blocker]);

  const handleScratchResult = (result: DrawResultResponse) => {
    setDrawResult(result);
  };
  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <div
        className='bg-cover bg-center bg-no-repeat min-h-screen min-w-screen flex items-center justify-center'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className='flex w-[49rem] flex-col items-center gap-8'>
          <div className='self-stretch items-center justify-center flex-col flex gap-4 pointer-events-none'>
            <Button
              type='square'
              text={`내가 초대한 친구 ${data?.result?.invitedNum ?? 0}회 | 오늘의 복권 기회 ${data?.result?.remainDrawCount ?? 0}회`}
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
              {drawResult ? (
                drawResult.result.images.map((img, index) => (
                  <img
                    className='img-no-drag pointer-events-none w-32 h-32'
                    key={index}
                    src={img}
                    alt={`SVG ${index + 1}`}
                  />
                ))
              ) : (
                <>
                  <img
                    className='w-32 h-32'
                    src='/svg/복권진함/다이아.svg'
                    alt='SVG 1'
                  />
                  <img
                    className='w-32 h-32'
                    src='/svg/복권진함/다이아.svg'
                    alt='SVG 2'
                  />
                  <img
                    className='w-32 h-32'
                    src='/svg/복권진함/다이아.svg'
                    alt='SVG 3'
                  />
                </>
              )}
            </div>
            <LotteryCanvas
              onScratch={handleScratchResult}
              remainDrawCount={data?.result?.remainDrawCount ?? 0}
            />
          </div>
          <Attendance counts={data?.result?.drawAttendanceCount ?? 0} />
        </div>
      </div>
      {blocker.state === 'blocked' && (
        <ExitModal
          isOpen={isExitModalOpen}
          handleClose={() => blocker.reset()}
          handleCancel={() => blocker.reset()}
          handleConfirm={() => {
            blocker.proceed();
            setIsExitModalOpen(false);
          }}
        />
      )}
    </div>
  );
};
export default LotteryLoungePage;

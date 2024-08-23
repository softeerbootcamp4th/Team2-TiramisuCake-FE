import { useQueryGetDrawHistory } from '@/apis/draw/query';
import { useQueryGetFCFSHistory } from '@/apis/quizLounge/query';
import Button from '@/components/common/Button/Button';
import LoadingPage from '@/components/Loading/Loading';
import { DrawHistoryList } from '@/types/lottery/type';
import { FcfsHistoryList } from '@/types/quizLounge/type';
import { getCookie } from '@/utils/cookie';
import { formatDate } from '@/utils/formatDate';
import { useNavigate } from 'react-router-dom';

const bgImg =
  'https://d1wv99asbppzjv.cloudfront.net/main-page/event_section_bg.webp';

const WinningResultPage = () => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate('/');
  };
  const accessToken = getCookie('accessToken');
  const { data: drawHistoryData, isLoading: isDrawHistoryLoading } =
    useQueryGetDrawHistory(accessToken);
  const { data: fcfsHistoryData, isLoading: isFCFSHistoryLoading } =
    useQueryGetFCFSHistory();

  if (isDrawHistoryLoading || isFCFSHistoryLoading) return <LoadingPage />;

  const hasDrawWin = drawHistoryData?.result.isDrawWin;
  const hasFcfsWin = fcfsHistoryData?.result.isFcfsWin;

  return (
    <div
      className='w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center p-5'
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className='mt-12 flex flex-col gap-12 items-center w-full'>
        <h2 className='font-bold text-h-l text-center mt-10'>당첨 내역</h2>
        {hasDrawWin || hasFcfsWin ? (
          <div className='w-full flex gap-12 justify-evenly'>
            {hasFcfsWin && (
              <div className='flex flex-col gap-4 items-center'>
                <h4 className='text-h-s font-semibold mb-4'>
                  '24시간 내 차' 이벤트
                </h4>
                <div className='flex flex-col gap-4'>
                  {fcfsHistoryData?.result?.fcfsHistoryList?.map(
                    (item: FcfsHistoryList, index: number) => (
                      <div
                        key={index}
                        className='flex justify-evenly gap-5 items-center text-b-l font-semibold'
                      >
                        <span>{formatDate(new Date(item.winningDate))}</span>
                        <div className='flex flex-col gap-1 items-center justify-evenly'>
                          <img
                            src={item.barcode}
                            alt='qrCode'
                            className='w-[80px] h-[80px]'
                          />
                          <p className='text-b-m'>
                            코드{' '}
                            <span className='text-primary ml-1'>
                              {item.fcfsCode}
                            </span>
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {hasDrawWin && (
              <div className='flex flex-col gap-4 items-center'>
                <h4 className='text-h-s font-semibold mb-4'>
                  복권 긁기 이벤트
                </h4>
                <div className='flex flex-col gap-4'>
                  {drawHistoryData?.result?.historyList?.map(
                    (item: DrawHistoryList, index: number) => (
                      <div
                        key={index}
                        className='flex justify-evenly gap-3 items-center text-b-l font-semibold'
                      >
                        <span>{formatDate(new Date(item.winningDate))}</span>
                        <span>{item.drawRank} 등</span>
                        <img src={item.image} className='w-[180px] h-[90px]' />
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className='text-b-xxl font-semibold mt-20 flex flex-col items-center gap-10'>
            <img
              src='/empty_gift.png'
              className='w-[200px] h-[200px]'
              alt='빈 상자'
            />
            <p>당첨 내역이 없습니다.</p>
            <Button
              text='이벤트 도전하기'
              type='square'
              handleClick={handleBtnClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default WinningResultPage;

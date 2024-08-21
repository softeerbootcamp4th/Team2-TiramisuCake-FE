import { useQueryGetDrawHistory } from '@/apis/draw/query';
import Button from '@/components/common/Button/Button';
import LoadingPage from '@/components/Loading/Loading';
import { getCookie } from '@/utils/cookie';
import { useNavigate } from 'react-router-dom';

const bgImg =
  'https://d1wv99asbppzjv.cloudfront.net/main-page/event_section_bg.webp';

const WinningResultPage = () => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate('/');
  };
  const accessToken = getCookie('accessToken');
  const { data, isLoading } = useQueryGetDrawHistory(accessToken);
  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  if (isLoading) return <LoadingPage />;
  return (
    <div
      className='w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center p-5'
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className='mt-12 flex flex-col gap-12 items-center'>
        <h2 className='font-bold text-h-l text-center mt-10'>당첨 내역</h2>
        {data && data.result.isDrawWin ? (
          <>
            {data?.result.drawHistoryList.map((item, index) => (
              <div
                key={index}
                className='flex justify-evenly gap-3 items-center text-b-l font-semibold'
              >
                <span>{formatDate(item.winningDate)}</span>
                <span>{item.drawRank} 등</span>
                <img src={item.image} className='w-[200px] h-[200px]' />
              </div>
            ))}
          </>
        ) : (
          <div className='text-b-xxl font-semibold mt-20 flex flex-col items-center gap-10'>
            <img
              src='/empty_gift.png'
              className='w-[200px] h-[200px]'
              alt='빈 상자'
            />
            <p> 당첨 내역이 없습니다.</p>
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
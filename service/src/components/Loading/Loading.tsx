import { useState, useEffect } from 'react';

const car = '/svg/ioniq5_svg.png';
const bgImage =
  'https://d1wv99asbppzjv.cloudfront.net/main-page/event_section_bg.webp';

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30); //3초

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className='flex flex-col font-semibold justify-center items-center text-center w-full min-h-screen text-hyundai gap-10'
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <p className='text-h-s whitespace-pre-wrap mb-10'>
        로딩중입니다. 잠시만 기다려 주세요
      </p>
      <div className='w-64 relative '>
        <div className='relative mb-2'>
          <img
            src={car}
            alt='Car'
            className='h-12 absolute bottom-0'
            style={{
              left: `calc(${progress}% - 50px)`, // 차량 이미지의 중앙 - 프로그레스 바의 진행 상태에 맞도록 조정
              transition: 'left 0.3s ease-out',
            }}
          />
        </div>
        <div className='h-4 bg-gray-200 rounded-full overflow-hidden'>
          <div
            className='h-full bg-hyundai rounded-full'
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;

import { useState } from 'react';
import Header from './Header';
import './Carousel.css';
import VideoPlayer from './VideoPlayer';
import CarouselBar from './CarouselBar';
import Button from '@/components/common/Button/Button';

const data = [
  {
    id: 1,
    title: 'The IONIQ 5',
    subTitle: '새롭게 돌아온 The new IONIQ 5를 소개합니다.',
    thumbnailUrl: '/thumbnail1.svg',
    backgroundImgUrl: '/CarSection.png',
  },
  {
    id: 2,
    title: 'Interior 2',
    subTitle: '내부 인테리어',
    thumbnailUrl: '/thumbnail2.svg',

    backgroundImgUrl: '/bg1.svg',
  },
  {
    id: 3,
    title: 'Performance 3',
    subTitle: '성능',
    thumbnailUrl: '/thumbnail1.svg',

    backgroundImgUrl: '/bg2.svg',
  },
  {
    id: 4,
    title: 'Interior 4',
    subTitle: '내부 인테리어',
    thumbnailUrl: '/thumbnail2.svg',

    backgroundImgUrl: '/bg1.svg',
  },
  {
    id: 5,
    title: 'Performance 5',
    subTitle: '성능',
    thumbnailUrl: '/thumbnail1.svg',

    backgroundImgUrl: '/bg2.svg',
  },
];

interface CarouselProps {}

const Carousel = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleSlideClick = (index: number) => {
    if (index >= 0 && index < data.length) {
      setCurrentIdx(index);
    }
  };

  const getVisibleItems = () => {
    switch (currentIdx) {
      case 0:
        return [data[0], data[1], data[2]];
      case 1:
        return [data[0], data[1], data[2], data[3]];
      case 2:
        return data;
      case 3:
        return [data[1], data[2], data[3], data[4]];
      case 4:
        return [data[2], data[3], data[4]];
      default:
        return data;
    }
  };

  const visibleItems = getVisibleItems();

  const handleButtonClick = () => {
    console.log('눌렀지롱');
  };

  return (
    <div className='carousel-container'>
      <div
        className='bg-cover bg-center bg-no-repeat h-full w-full flex items-center justify-center blur-sm absolute top-0 transition-transform duration-500 ease-in-out'
        style={{ backgroundImage: `url(${data[currentIdx].backgroundImgUrl})` }}
      />
      <div className='flex gap-4 items-center z-10'>
        {visibleItems.map((item) => {
          const isActive = item.id === data[currentIdx].id;
          const isDiffTwo = Math.abs(currentIdx - (item.id - 1)) === 2;

          return (
            <div
              key={item.id}
              className={`carousel-item ${isActive ? 'active bg-transparent' : 'adjacent bg-gradient-light-gray backdrop-blur-blur-40'} ${isDiffTwo ? 'shorter' : ''}`}
              onClick={() => handleSlideClick(item.id - 1)}
            >
              <div className='carousel-item-content'>
                {isActive && (
                  <>
                    <Header title={item.title} subTitle={item.subTitle} />
                    {item.id === 1 ? (
                      <VideoPlayer />
                    ) : (
                      <div className='w-[784px] h-[422px] relative'>
                        <img
                          src={item.thumbnailUrl}
                          alt={item.title}
                          className='w-full h-full'
                        />
                        <div className='w-full h-full absolute top-0 bg-gradient-bottom-gray' />
                        <div className='absolute top-12 right-12'>
                          <Button
                            type='square'
                            text='자세히 보기'
                            handleClick={handleButtonClick}
                          />
                        </div>
                        <div className='flex flex-col gap-4 absolute bottom-12 left-12 text-white'>
                          <h3 className='text-b-xl font-semibold'>
                            Living Space
                          </h3>
                          <p className='text-b-s'>
                            편안한 거주 공간 (Living Space) 테마를 반영하여 더
                            넓은 실내 공간을 즐길 수 있도록 연출합니다.
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <CarouselBar currentIdx={currentIdx} />
    </div>
  );
};

export default Carousel;

import { useState } from 'react';
import Header from './Header';
import './Carousel.css';
import VideoPlayer from './VideoPlayer';

const data = [
  {
    id: 1,
    title: 'The IONIQ 5',
    subTitle: '새롭게 돌아온 The new IONIQ 5를 소개합니다.',
    backgroundImgUrl: '/CarSection.png',
  },
  {
    id: 2,
    title: 'Interior 2',
    subTitle: '내부 인테리어',
    backgroundImgUrl: '/bg1.svg',
  },
  {
    id: 3,
    title: 'Performance 3',
    subTitle: '성능',
    backgroundImgUrl: '/bg2.svg',
  },
  {
    id: 4,
    title: 'Interior 4',
    subTitle: '내부 인테리어',
    backgroundImgUrl: '/bg1.svg',
  },
  {
    id: 5,
    title: 'Performance 5',
    subTitle: '성능',
    backgroundImgUrl: '/bg2.svg',
  },
];

const Carousel = () => {
  const [currentIdx, setCurrentIdx] = useState(2);

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

  return (
    <div className='carousel-container'>
      <div
        className='bg-cover bg-center bg-no-repeat h-full w-full flex items-center justify-center blur-sm absolute top-0'
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
                      <img src={item.backgroundImgUrl} alt={item.title} />
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

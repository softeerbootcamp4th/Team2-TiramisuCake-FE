import Header from './Header';
import './Carousel.css';
import VideoPlayer from './VideoPlayer';
import CarouselBar from './CarouselBar';
import Button from '@/components/common/Button/Button';
import CarDetailInfo from './CarDetailInfo';
import { useCarInfoContext } from '@/store/context/useCarInfoContext';
import CarouselBg from './CarouselBg';
import { motion } from 'framer-motion';
import { SCROLL_MOTION } from '@/constants/animation';

const data = [
  {
    id: 1,
    title: 'The IONIQ 5',
    subTitle: '새롭게 돌아온 The new IONIQ 5를 소개합니다.',
    thumbnailUrl: '/thumbnail1.svg',
    backgroundImgUrl: '/bg1.png',
  },
  {
    id: 2,
    title: 'Interior 2',
    subTitle: '내부 인테리어',
    thumbnailUrl: '/thumbnail2.svg',
    backgroundImgUrl: '/bg2.svg',
  },
  {
    id: 3,
    title: 'Performance 3',
    subTitle: '성능',
    thumbnailUrl: '/thumbnail1.svg',
    backgroundImgUrl: '/bg3.svg',
  },
  {
    id: 4,
    title: 'Interior 4',
    subTitle: '내부 인테리어',
    thumbnailUrl: '/thumbnail2.svg',
    backgroundImgUrl: '/bg4.svg',
  },
  {
    id: 5,
    title: 'Performance 5',
    subTitle: '성능',
    thumbnailUrl: '/thumbnail1.svg',
    backgroundImgUrl: '/bg5.svg',
  },
];

const Carousel = () => {
  const { state, openCarDetail, selectCurrentIndex } = useCarInfoContext();

  const handleSlideClick = (index: number) => {
    if (index >= 0 && index < data.length) {
      selectCurrentIndex({ index: index });
    }
  };

  const getVisibleItems = () => {
    switch (state.currentIndex) {
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

  const getTransformClass = (id: number) => {
    switch (id) {
      case 1:
        return 'translate-x-custom-1';
      case 2:
        return 'translate-x-custom-2';
      case 3:
        return '';
      case 4:
        return 'translate-x-custom-4';
      case 5:
        return 'translate-x-custom-5';
      default:
        return '';
    }
  };
  return (
    <div className='carousel-container'>
      <CarouselBg currentIdx={state.currentIndex} />
      <div className='flex gap-4 z-10 items-center'>
        {visibleItems.map((item) => {
          const isActive = item.id === data[state.currentIndex].id;
          const isDiffTwo = Math.abs(state.currentIndex - (item.id - 1)) === 2;

          return (
            <div
              key={item.id}
              className={`carousel-item ${isActive ? 'active bg-transparent' : `transform ${getTransformClass(state.currentIndex + 1)} adjacent bg-gradient-light-gray backdrop-blur-blur-40`} ${isDiffTwo ? 'shorter' : ''}`}
              onClick={() => handleSlideClick(item.id - 1)}
            >
              <div className='carousel-item-content'>
                {isActive && (
                  <>
                    <Header title={item.title} subTitle={item.subTitle} />
                    {item.id === 1 ? (
                      <VideoPlayer />
                    ) : (
                      <div
                        className='w-[784px] h-[422px] relative'
                        style={{
                          transform: `translateX(${-(item.id - 3) * 53.5}px)`,
                        }}
                      >
                        <img
                          src={item.thumbnailUrl}
                          alt={item.title}
                          className='w-full h-full object-cover'
                        />
                        <div className='w-full h-full absolute top-0 bg-gradient-bottom-gray' />
                        <div className='absolute top-12 right-12'>
                          <Button
                            type='square'
                            text='자세히 보기'
                            handleClick={openCarDetail}
                          />
                        </div>
                        <motion.div
                          className='flex flex-col gap-4 absolute bottom-12 left-12 text-white'
                          {...SCROLL_MOTION}
                        >
                          <h3 className='text-b-xl font-semibold'>
                            Living Space
                          </h3>
                          <p className='text-b-s'>
                            편안한 거주 공간 (Living Space) 테마를 반영하여 더
                            넓은 실내 공간을 즐길 수 있도록 연출합니다.
                          </p>
                        </motion.div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <CarouselBar />
      {state.isCarDetailOpen && <CarDetailInfo />}
    </div>
  );
};

export default Carousel;

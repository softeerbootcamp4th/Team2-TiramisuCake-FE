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
import { CarInfoList } from '@/types/main/carInfoType';

interface CarouselProps {
  carInfoList: CarInfoList[];
}

const Carousel = ({ carInfoList }: CarouselProps) => {
  const { state, openCarDetail, selectCurrentIndex } = useCarInfoContext();

  const handleSlideClick = (index: number) => {
    if (index >= 0 && index < carInfoList.length) {
      selectCurrentIndex({ index: index });
    }
  };

  const getVisibleItems = () => {
    switch (state.currentIndex) {
      case 0:
        return [carInfoList[0], carInfoList[1], carInfoList[2]];
      case 1:
        return [carInfoList[0], carInfoList[1], carInfoList[2], carInfoList[3]];
      case 2:
        return carInfoList;
      case 3:
        return [carInfoList[1], carInfoList[2], carInfoList[3], carInfoList[4]];
      case 4:
        return [carInfoList[2], carInfoList[3], carInfoList[4]];
      default:
        return carInfoList;
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
    <div className='snap-center carousel-container'>
      <CarouselBg currentIdx={state.currentIndex} />
      <div className='flex gap-4 z-10 items-center'>
        {visibleItems.map((item) => {
          const isActive = item.id === carInfoList[state.currentIndex].id;
          const isDiffTwo = Math.abs(state.currentIndex - (item.id - 1)) === 2;

          return (
            <div
              key={item.id}
              className={`carousel-item ${isActive ? 'active bg-transparent ' : `transform ${getTransformClass(state.currentIndex + 1)} adjacent bg-gradient-light-gray backdrop-blur-blur-40`} ${isDiffTwo ? 'shorter' : ''}`}
              onClick={() => handleSlideClick(item.id - 1)}
            >
              <div className='carousel-item-content'>
                {isActive && (
                  <>
                    <Header title={item.title} subTitle={item.subTitle} />
                    {item.id === 1 ? (
                      <VideoPlayer videoUrl={item.imgUrl} />
                    ) : (
                      <div
                        className='w-[784px] h-[422px] relative transform duration-200'
                        style={{
                          transform: `translateX(${-(item.id - 3) * 50}px)`,
                        }}
                      >
                        <img
                          src={item.imgUrl}
                          alt={item.title}
                          className='w-full h-full object-cover transform duration-200'
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
                          <h3 className='text-b-xxl font-semibold'>
                            {item.imgTitle}
                          </h3>
                          <p className='text-b-m'>{item.imgContent}</p>
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
      {state.isCarDetailOpen && (
        <CarDetailInfo
          carDetailInfoList={carInfoList[state.currentIndex].carDetailInfoList}
        />
      )}
    </div>
  );
};

export default Carousel;

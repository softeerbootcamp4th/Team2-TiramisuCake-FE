import { useEffect } from 'react';
import Header from './Header';
import './Swiper.css'; // 필요한 스타일 정의
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

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

const SwiperContainer = () => {
  const updateSlideBackgrounds = () => {
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach((slide) => {
      const imgDiv = slide.querySelector('.swiper-img') as HTMLElement;
      if (slide.classList.contains('swiper-slide-active')) {
        imgDiv.style.backgroundImage = `url(${imgDiv.getAttribute('data-bg-url')})`;
      } else {
        imgDiv.style.backgroundImage = 'none';
      }
    });
  };

  useEffect(() => {
    updateSlideBackgrounds();

    // SwiperSlide가 변경될 때마다 배경 이미지를 업데이트
    const observer = new MutationObserver(updateSlideBackgrounds);
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach((slide) => {
      observer.observe(slide, { attributes: true, attributeFilter: ['class'] });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        updateOnWindowResize={true}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={true}
        onSlideChange={updateSlideBackgrounds}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='swiper-slide-content'>
              <div
                data-bg-url={item.backgroundImgUrl}
                className='swiper-img bg-gray-300'
              />
              <Header title={item.title} subTitle={item.subTitle} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperContainer;

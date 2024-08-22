const bg: string[] = [
  'https://d1wv99asbppzjv.cloudfront.net/main-page/main_background_image.webp',
  'https://d1wv99asbppzjv.cloudfront.net/main-page/interior_background_image.webp',
  'https://d1wv99asbppzjv.cloudfront.net/main-page/performance_background_image.webp',
  'https://d1wv99asbppzjv.cloudfront.net/main-page/charging_background_image.webp',
  'https://d1wv99asbppzjv.cloudfront.net/main-page/safe_background_image.webp',
];
const CarouselBg = ({ currentIdx }: { currentIdx: number }) => {
  return (
    <>
      <div
        className={`bg-[#FFFFFF26] backdrop-blur-blur-60 absolute h-full w-full top-0 opacity-100 z-10`}
      />
      {bg.map((_, index) => (
        <div
          key={index}
          className={`bg-cover bg-center bg-no-repeat h-full w-full flex items-center justify-center absolute top-0 transform duration-500 ease-in-out ${currentIdx === index ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${bg[index]})`,
          }}
        />
      ))}
    </>
  );
};

export default CarouselBg;

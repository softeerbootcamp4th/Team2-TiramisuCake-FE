import React from 'react';

const CarouselBg = ({ currentIdx }: { currentIdx: number }) => {
  return (
    <>
      <>
        <div
          className={`bg-cover bg-center bg-no-repeat h-full w-full flex items-center justify-center absolute top-0 transition-transform duration-500 ease-in-out ${currentIdx === 0 ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url('/svg/bg1.svg')`,
          }}
        />
        <div
          className={`bg-[#FFFFFF26] backdrop-blur-blur-60 absolute h-full w-full top-0 ${currentIdx === 0 ? 'opacity-100' : 'opacity-0'}`}
        />
      </>
      <>
        <div
          className={`bg-cover bg-center bg-no-repeat h-full w-full flex items-center justify-center absolute top-0 transition-transform duration-500 ease-in-out ${currentIdx === 1 ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url('/svg//bg2.svg')`,
          }}
        />
        <div
          className={`bg-[#FFFFFF26] backdrop-blur-blur-60 absolute h-full w-full top-0 ${currentIdx === 1 ? 'opacity-100' : 'opacity-0'}`}
        />
      </>

      <>
        <div
          className={`bg-cover bg-center bg-no-repeat h-full w-full flex items-center justify-center absolute top-0 transition-transform duration-500 ease-in-out ${currentIdx === 2 ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url('/svg//bg3.svg')`,
          }}
        />
        <div
          className={`bg-[#FFFFFF26] backdrop-blur-blur-60 absolute h-full w-full top-0 ${currentIdx === 2 ? 'opacity-100' : 'opacity-0'}`}
        />
      </>
      <>
        <div
          className={`bg-cover bg-center bg-no-repeat h-full w-full flex items-center justify-center absolute top-0 transition-transform duration-500 ease-in-out ${currentIdx === 3 ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url('/svg//bg4.svg')`,
          }}
        />
        <div
          className={`bg-[#FFFFFF26] backdrop-blur-blur-60 absolute h-full w-full top-0 ${currentIdx === 3 ? 'opacity-100' : 'opacity-0'}`}
        />
      </>

      <>
        <div
          className={`bg-cover bg-center bg-no-repeat h-full w-full flex items-center justify-center absolute top-0 transition-transform duration-500 ease-in-out ${currentIdx === 4 ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url('/svg//bg5.svg')`,
          }}
        />
        <div
          className={`bg-[#FFFFFF26] backdrop-blur-blur-60 absolute h-full w-full top-0 ${currentIdx === 4 ? 'opacity-100' : 'opacity-0'}`}
        />
      </>
    </>
  );
};

export default CarouselBg;

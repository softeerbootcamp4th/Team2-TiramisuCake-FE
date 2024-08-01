interface CarouselBarProps {
  currentIdx: number;
}
const CarouselBar = ({ currentIdx }: CarouselBarProps) => {
  return (
    <div className='flex gap-2 z-10 mt-8'>
      {[...Array(5)].map((_, index) => (
        <span
          className={`h-[7px] rounded-3xl ${currentIdx === index ? 'w-[33px] bg-white' : 'w-[7px] bg-gray-300'}`}
        />
      ))}
    </div>
  );
};

export default CarouselBar;

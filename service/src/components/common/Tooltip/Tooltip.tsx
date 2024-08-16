import { useUrl } from '@/store/context/useUrl';
import { useState } from 'react';

const Tooltip = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { url } = useUrl();

  const handleHover = (hoverState: boolean) => {
    if (!isClicked) setIsHovered(hoverState);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    setIsHovered(false);
    navigator.clipboard.writeText(url);
    console.log(url);
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };

  return (
    <div className='fixed right-12 bottom-12 z-10'>
      <div className='relative group'>
        {!isClicked && (
          <div
            className={`absolute bottom-full right-0 mb-2 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-200 pointer-events-none`}
          >
            <div className='bg-gray-900 text-white px-4 py-2 rounded-2xl shadow-lg text-sm whitespace-nowrap'>
              초대한 친구 수만큼 복권 기회
            </div>
          </div>
        )}

        {isClicked && (
          <div className='bg-white text-green-400 px-4 py-2 text-sm absolute bottom-full right-0 mb-2 rounded-2xl border-green-400 border-[1px] opacity-100 transition-opacity duration-200 whitespace-nowrap'>
            공유링크가 복사되었습니다.
          </div>
        )}

        <button
          className='flex items-center justify-center'
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
          onClick={handleClick}
        >
          <img src='/floatingButton.svg' alt='Floating Button' />
        </button>
      </div>
    </div>
  );
};

export default Tooltip;

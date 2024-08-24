import { memo, useEffect, useState } from 'react';

interface ButtonProp {
  type: State;
  text: string;
  isArrow?: boolean;
  isActive?: boolean;
  handleClick: () => void;
}

type State =
  | 'square'
  | 'squareWithBorder'
  | 'round'
  | 'roundDone'
  | 'reaction'
  | 'mediumRound'
  | 'bigRound';

const Button = ({
  type,
  text,
  isArrow = false,
  isActive = true,
  handleClick,
}: ButtonProp) => {
  const [isReactionClicked, setIsReactionClicked] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isReactionClicked) {
      timer = setTimeout(() => {
        setIsReactionClicked(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isReactionClicked]);

  const buttonStyle: Record<string, string> = {
    square: `px-7 py-2.5 ${isActive ? 'bg-primary' : 'bg-gray-400'}`,
    squareWithBorder: `px-7 py-[9px] border border-primary bg-[#e5e7eb]`,
    round: `p-2.5 rounded-[10px] ${isActive ? 'bg-primary' : 'bg-gray-400'}`,
    roundDone: `p-2.5 rounded-[10px] bg-white`,
    reaction: `px-2.5 py-2 bg-white rounded-[5px] shadow-20 ${
      isActive ? '' : 'opacity-50 cursor-not-allowed'
    }`,
    mediumRound:
      'rounded-[10px] min-w-[120px] p-2.5 bg-primary hover:bg-green-500',
    bigRound: `rounded-sm w-[356px] p-2.5 ${isActive ? 'bg-primary' : 'bg-gray-400'}`,
  };

  const textStyle: Record<string, string> = {
    square: 'text-white text-b-l',
    squareWithBorder: 'text-primary text-b-l font-semibold',
    round: ' text-white text-b-s font-semibold',
    roundDone: 'text-primary text-b-s font-semibold',
    reaction: `${isReactionClicked ? 'text-primary' : 'text-black'} text-b-m font-semibold`,
    mediumRound: ' text-white text-b-m font-semibold',
    bigRound: 'text-white text-b-m font-bold',
  };

  const handleBtnClick = () => {
    if (isActive) {
      handleClick();
    }
    if (type == 'reaction') setIsReactionClicked(true);
  };

  return (
    <button
      className={`flex items-center justify-center ${buttonStyle[type]}`}
      onClick={handleBtnClick}
      disabled={!isActive} // 활성화 상태에 따라 버튼 비활성화
    >
      <span className={`text-center ${textStyle[type]}`}>{text}</span>
      {isArrow && (
        <img
          className='ml-2'
          src='/svg/arrow-white-small.svg'
          alt='arrow'
          width={24}
          height={25}
        />
      )}
    </button>
  );
};

export default memo(Button);

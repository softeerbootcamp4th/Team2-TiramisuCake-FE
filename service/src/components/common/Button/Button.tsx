import { useEffect, useState } from 'react';
/**
 * Button Component
 * @param type : 사용할 버튼 타입
 * @param text : 버튼 내부 텍스트
 * @param isArrow : Arrow 표시 여부
 * @param isActive : 버튼 활성화 여부
 * @param handleClick : 버튼 클릭 핸들러
 * @returns
 */
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
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isReactionClicked]);

  const buttonStyle: Record<string, string> = {
    square: `px-2.5 py-2 ${isActive ? 'bg-primary' : 'bg-gray-400'}`,
    squareWithBorder: `px-3 py-2.5 border border-primary`,
    round: `p-2.5 rounded-[10px] ${isActive ? 'bg-primary' : 'bg-gray-400'}`,
    roundDone: `p-2.5 rounded-[10px] bg-white`,
    reaction: `px-2.5 py-2 bg-white rounded-[5px] shadow-20`,
    bigRound: `rounded-sm w-[356px] p-2.5 ${isActive ? 'bg-primary' : 'bg-gray-400'}`,
  };

  const textStyle: Record<string, string> = {
    square: 'text-white text-b-m',
    squareWithBorder: 'text-primary text-b-xl font-semibold',
    round: 'text-white text-b-s font-semibold',
    roundDone: 'text-primary text-b-s font-semibold',
    reaction: `${isReactionClicked ? 'text-primary' : 'text-black'} text-b-m font-semibold`,
    bigRound: 'text-white text-b-m font-bold',
  };

  const handleBtnClick = () => {
    handleClick();
    if (type == 'reaction') setIsReactionClicked(true);
  };

  return (
    <button
      className={`flex items-center justify-center ${buttonStyle[type]}`}
      onClick={handleBtnClick}
    >
      <span className={`text-center ${textStyle[type]}`}>{text}</span>
      {isArrow ? (
        <img className='ml-2' src='/svg/arrow-white-small.svg' alt='arrow' />
      ) : (
        ''
      )}
    </button>
  );
};

export default Button;

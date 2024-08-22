import { memo } from 'react';

/**
 * Badge Component
 * @param type : 사용할 뱃지 색깔
 * @param text : 버튼 내부 텍스트
 */
interface BadgeProp {
  type: Color;
  text: string;
}

type Color = 'blue' | 'lightblue' | 'white';

const Badge = ({ type, text }: BadgeProp) => {
  const buttonStyle: Record<string, string> = {
    blue: `rounded-full inline-flex justify-center items-center bg-primary`,
    lightblue: `rounded-full bg-green-100`,
    white: `rounded-full inline-flex justify-center items-center bg-white`,
  };

  const textStyle: Record<string, string> = {
    blue: `rounded-full py-2 px-4 inline-flex text-white text-b-l`,
    lightblue: `rounded-full py-2 px-4 inline-flex text-primary text-b-l`,
    white: `rounded-full py-2 px-4 inline-flex text-primary text-b-l`,
  };

  return (
    <div className={`flex items-center ${buttonStyle[type]}`}>
      <span className={`${textStyle[type]} font-bold`}>{text}</span>
    </div>
  );
};

export default memo(Badge);

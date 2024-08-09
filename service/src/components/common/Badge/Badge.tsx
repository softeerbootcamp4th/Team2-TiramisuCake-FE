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
    blue: `rounded-full py-1 px-2 inline-flex text-white text-b-s`,
    lightblue: `rounded-full py-1 px-2 inline-flex text-primary text-b-s`,
    white: `rounded-full py-1 px-2 inline-flex text-primary text-b-s`,
  };

  return (
    <div className={`flex items-center ${buttonStyle[type]}`}>
      <span className={`${textStyle[type]}`}>{text}</span>
    </div>
  );
};

export default Badge;

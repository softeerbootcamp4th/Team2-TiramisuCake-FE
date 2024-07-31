import Button from '../common/Button/Button';
import { useNavigate } from 'react-router-dom';

const backgroundImage = '/Rending.png';
const gifFile = '/gifs.gif';
const downarrow = '/svg/BigArrow.svg';

interface RendingSectionProps {
  onArrowClick: () => void;
}

const RendingSection = ({ onArrowClick }: RendingSectionProps) => {
  const navigate = useNavigate();
  const showComments = () => {
    navigate('/comments');
  };
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat min-h-screen min-w-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex w-[54.125rem] flex-col items-center gap-9 z-5">
          <div
            className="text-[6rem] text-center font-montserrat text-6xl font-bold leading-tight"
            style={{
              backgroundImage:
                'linear-gradient(180deg, #FFF 39.36%, rgba(255, 255, 255, 0.80) 83.14%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            The New IONIQ 5
          </div>
          <div className="flex">
            <img
              src={gifFile}
              alt="Description of the GIF"
              className="w-[12.5rem] h-[11.25rem] flex-shrink-0"
            />
          </div>
          <Button
            type="square"
            text="이벤트 기대평 쓰러가기"
            isArrow
            handleClick={showComments}
          />
          <div className=" mt-40 ">
            <img
              className="hover:cursor-pointer"
              src={downarrow}
              alt="Arrow"
              onClick={onArrowClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default RendingSection;

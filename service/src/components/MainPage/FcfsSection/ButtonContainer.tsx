import Button from '@/components/common/Button/Button';
import { ROUTER_PATH } from '@/constants/lib/constants';
import useCountdownTimer from '@/hooks/MainPage/useCountdownTimer';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  fcfsStartTime: string;
}

const ButtonContainer = ({ fcfsStartTime }: Props) => {
  const navigator = useNavigate();

  const { buttonText, isActive } = useCountdownTimer({
    fcfsStartTime,
  });

  const goQuizLounge = useCallback(() => {
    navigator(`${ROUTER_PATH.QUIZ_LOUNGE}?mode=live`);
  }, [navigator]);

  const goTutorialQuizLounge = useCallback(() => {
    navigator(`${ROUTER_PATH.QUIZ_LOUNGE}?mode=tutorial`);
  }, [navigator]);

  return (
    <div className='flex gap-6 mt-10 '>
      <Button
        type='squareWithBorder'
        text='튜토리얼'
        handleClick={goTutorialQuizLounge}
      />
      <Button
        type='square'
        text={buttonText}
        handleClick={goQuizLounge}
        isActive={isActive}
      />
    </div>
  );
};

export default ButtonContainer;

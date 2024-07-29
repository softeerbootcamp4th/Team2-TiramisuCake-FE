import React from 'react';

interface ButtonProp {
  type: State;
  text: string;
  isArrow?: boolean;
  handleOnClick: () => void;
}

type State = 'square' | 'round' | 'reaction' | 'big-round';

const styled : Record<string, string> = {
  squre : '',
  round: '',
  reaction: '',
  big-round: ''
}

const Button = ({ type, text, isArrow = false, handleOnClick }: ButtonProp) => {
  return (
    <button onClick={handleOnClick}>
      <span>{text}</span>
      {isArrow} ? <img src="/assets/arrow-white-small.svg" alt="arrow" />
    </button>
  );
};

export default Button;

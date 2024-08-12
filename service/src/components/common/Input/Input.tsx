import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Button from '../Button/Button';
import { debounce } from 'lodash';
import { validatePhoneNumber } from '@/utils/checkPhoneNumber';

/**
 *
 * @param type : input type (active 상태, disabled 상태)
 * @param inputText : input text
 * @param buttonText : button text
 * @param required : input required 여부
 * @param showButton : input 내부 버튼 있는지 여부
 * @param isError : input error 여부
 * @param isPhone : input 전환번호 여부
 * @param handleClick : button click handler
 * @param value : input value
 * @param onChange : input change handler
 * @returns
 */

interface InputProps {
  type: InputType;
  inputText: string;
  buttonText: string;
  showButton?: boolean;
  required?: boolean;
  isError?: boolean;
  isActivated?: boolean;
  handleButtonClick?: (object?: any) => Promise<void>;
  //부모 컴포넌트에서 변경된 값 사용
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

type InputType = 'active' | 'disabled';

const Input = ({
  type,
  inputText,
  buttonText,
  showButton = false,
  required = false,
  isError = false,
  isActivated = true,
  handleButtonClick,
  value = '',
  onChange,
}: InputProps) => {
  const [isValue, setIsValue] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const buttonType = type === 'active' ? 'round' : 'roundDone';

  useEffect(() => {
    if (type === 'disabled') setDisabled(true);
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  const handleFocus = () => {
    setIsFocus((prev) => !prev);
  };

  const debouncedSetIsValue = useCallback(
    debounce((val) => {
      setIsValue(!!val);
    }, 500),
    []
  );

  useEffect(() => {
    debouncedSetIsValue(value);
    return () => {
      debouncedSetIsValue.cancel();
    };
  }, [value, debouncedSetIsValue]);

  return (
    <div
      className={`p-2.5 flex w-[356px] h-[58px] rounded-[5px] justify-between items-center ${isFocus ? 'border border-primary bg-white' : 'bg-gray-50'}`}
    >
      <div className='flex'>
        <input
          type='text'
          value={value}
          placeholder={inputText}
          required={required}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleFocus}
          disabled={disabled}
          className='bg-transparent outline-none'
        ></input>
        {isError ? (
          <img src='/svg/error.svg' alt='error' className='w-[22px] h-[22px]' />
        ) : (
          ''
        )}
      </div>

      {showButton && (
        <Button
          type={buttonType}
          isActive={isActivated}
          text={buttonText}
          handleClick={() => handleButtonClick(value)}
        />
      )}
    </div>
  );
};

export default Input;

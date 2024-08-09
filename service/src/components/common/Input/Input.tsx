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
 * @param isError : input error 여부
 * @param isPhone : input 전환번호 여부
 * @param handleClick : button click handler
 * @returns
 */

interface InputProps {
  type: InputType;
  inputText: string;
  buttonText: string;
  showButton?: boolean;
  required?: boolean;
  isError?: boolean;
  isPhone?: boolean;
  handleClick: () => void;
}

type InputType = 'active' | 'disabled';

const Input = ({
  type,
  inputText,
  buttonText,
  showButton = false,
  required = false,
  isError = false,
  isPhone = false,
  handleClick,
}: InputProps) => {
  const [value, setValue] = useState('');
  const [isValue, setIsValue] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const buttonActive = isValue ? true : false;
  const buttonType = type === 'active' ? 'round' : 'roundDone';
  const [_isValid, setIsValid] = useState(true);

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, ''); // 숫자만 추출
    let formattedValue = '';

    if (rawValue.length <= 3) {
      formattedValue = rawValue;
    } else if (rawValue.length <= 7) {
      formattedValue = `${rawValue.slice(0, 3)}-${rawValue.slice(3)}`;
    } else {
      formattedValue = `${rawValue.slice(0, 3)}-${rawValue.slice(3, 7)}-${rawValue.slice(7, 11)}`;
    }

    setValue(formattedValue);
    setIsValid(validatePhoneNumber(formattedValue));
  };

  useEffect(() => {
    if (type === 'disabled') setDisabled(true);
  }, []);

  const handleButtonClick = () => {
    handleClick();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
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
      className={`p-2.5 flex w-[356px] h-[58px rounded-[5px] justify-between items-center ${isFocus ? 'border border-primary bg-white' : 'bg-gray-50'}`}
    >
      <div className='flex'>
        <input
          type='text'
          value={value}
          placeholder={inputText}
          required={required}
          onChange={isPhone ? handlePhoneNumberChange : handleInputChange}
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
          isActive={buttonActive}
          text={buttonText}
          handleClick={handleButtonClick}
        />
      )}
    </div>
  );
};

export default Input;

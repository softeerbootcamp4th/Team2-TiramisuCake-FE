import { getNumberValidation } from '@/utils/getValidation';
import { ChangeEvent, useEffect } from 'react';
import { Input } from '../ui/input';
import ErrorMessage from '../common/ErrorMessage';

interface InputFieldProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  error: string;
  setError: (error: string) => void;
  validationRange: [number, number];
}

const InputField = ({
  label,
  value,
  setValue,
  error,
  setError,
  validationRange,
}: InputFieldProps) => {
  const [min, max] = validationRange;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (getNumberValidation(e.target.value, min, max)) {
      setValue(e.target.value);
      setError('');
    } else {
      setValue('');
      setError('1~10의 숫자만 입력 가능');
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, setError]);

  return (
    <div className='flex gap-4 w-full items-center justify-evenly'>
      <span>{label}</span>
      <div>
        <Input
          className='w-[116px] h-12'
          onChange={handleInputChange}
          value={value}
        />
        {error ? (
          <ErrorMessage message={error} />
        ) : (
          <div className='h-[16.5px]' />
        )}{' '}
      </div>

      <span>0.0000</span>
    </div>
  );
};

export default InputField;

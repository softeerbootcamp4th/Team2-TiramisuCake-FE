interface ErrorMessage {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessage) => {
  return <div className='text-[11px] text-red mt-1'>{message}</div>;
};

export default ErrorMessage;

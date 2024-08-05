interface TextCardProps {
  type: 'empty' | 'answer';
  answerChar?: string;
}

const TextCard = ({ type, answerChar }: TextCardProps) => {
  return (
    <div className='w-[5.25rem] h-24 quiz-effect flex justify-center text-center  text-h-l font-bold'>
      <span className='my-auto bg-gradient-attend bg-clip-text text-transparent'>
        {type === 'answer' && answerChar}
      </span>
    </div>
  );
};

export default TextCard;

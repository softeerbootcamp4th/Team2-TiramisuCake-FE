interface TextCardProps {
  type: 'empty' | 'answer';
  isCorrect?: boolean;
  answerChar?: string;
}

const TextCard = ({ type, answerChar, isCorrect }: TextCardProps) => {
  const styled = isCorrect
    ? 'bg-gradient-attend bg-clip-text text-transparent'
    : 'text-gray-300';
  return (
    <div className='w-[5.25rem] h-24 quiz-effect flex justify-center text-center text-h-l font-bold'>
      <span className={` my-auto ${styled}`}>
        {type === 'answer' && answerChar}
      </span>
    </div>
  );
};

export default TextCard;

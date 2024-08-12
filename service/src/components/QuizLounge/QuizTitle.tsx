interface QuizTitleProps {
  quizTitle: string;
  answer: string[];
}

const QuizTitle = ({ quizTitle, answer }: QuizTitleProps) => {
  return (
    <div className='flex flex-col items-center gap-2 pt-[5.625rem]'>
      <div className='px-3 py-2 bg-black text-white rounded-[0.625rem] text-b-xxl font-bold'>
        Q
      </div>
      <div className='mt-1 text-h-l font-bold text-gray-800 tracking-[-0.36px] whitespace-pre-wrap text-center'>
        <span className='text-primary'>
          '{answer.map((char, _index) => (char === ' ' ? ' ' : 0))}'
        </span>
        {quizTitle}
      </div>
      <div className='text-b-xl text-gray-600'>
        선착순 25명에게 The new IONIQ 5 24시간 무료 렌트권 증정
      </div>
    </div>
  );
};

export default QuizTitle;

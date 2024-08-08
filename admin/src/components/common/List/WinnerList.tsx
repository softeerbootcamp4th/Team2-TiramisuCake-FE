import EditButton from '../Button/EditButton';

type Winner = {
  rank: string;
  count: number;
  probability: string;
};

type WinnerListProps = {
  title: string;
  winners: Winner[];
  onClick: () => void;
};

const WinnerList = ({ title, winners, onClick }: WinnerListProps) => {
  return (
    <div className='bg-white rounded-lg px-4 pt-4 pb-2 w-[30rem]'>
      <div className='text-lg font-semibold mb-2'>{title}</div>
      <hr className='border-gray-300 my-2 mx-auto w-[95%]' />
      <div className='flex justify-between'>
        <div className='font-bold my-auto'>당첨 인원 및 확률</div>
        <div className='flex-1 ml-3 p-2'>
          {winners.map((winner, index) => (
            <div key={index} className='flex justify-between items-center my-1'>
              <div>
                {winner.rank} : {winner.count}
              </div>
              <div className='mx-2'>|</div>
              <div>{winner.probability}</div>
            </div>
          ))}
        </div>
        <div className='my-auto mr-3'>
          <EditButton text='수정하기' onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default WinnerList;

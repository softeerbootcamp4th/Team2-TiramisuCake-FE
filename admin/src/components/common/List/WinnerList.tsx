import { DrawEventList } from '@/type/main/type';
import EditButton from '../Button/EditButton';

interface WinnerListProps {
  title: string;
  winners: DrawEventList[];
  onClick: () => void;
}

const WinnerList = ({ title, winners, onClick }: WinnerListProps) => {
  return (
    <div className='bg-white rounded-lg px-4 pt-4 pb-2 w-full'>
      <div className='text-lg font-semibold mb-2'>{title}</div>
      <hr className='border-gray-300 my-2 mx-auto w-[95%]' />
      <div className='flex justify-between'>
        <div className='font-bold my-auto'>당첨 인원 및 확률</div>
        <div className='flex-1 ml-4 p-2'>
          {winners?.map((winner, index) => (
            <div key={index} className='flex justify-between my-1'>
              <div className='flex w-full items-center'>
                <div className='flex-1 text-left'>
                  {winner.rank} : {winner.winnerNum}
                </div>
                <div className='flex-none text-center'>|</div>
                <div className='flex-1 text-right'>{winner.probability}</div>
              </div>
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

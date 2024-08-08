import { useState } from 'react';

const RaffleWinnerList = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const tabStyled = 'py-1 border-r border-gray-600 flex-1 text-center';

  return (
    <div className='w-[373px] flex flex-col items-center'>
      <div className='font-bold'>추첨 당첨자 목록</div>
      <div className='flex flex-col gap-7 w-full items-center mt-2'>
        <div
          className='rounded-xl w-[144px] text-xs border border-gray-600 flex cursor-pointer 
        '
        >
          <span
            className={`rounded-s-xl ${tabStyled} ${
              selectedIndex === 1 ? 'bg-[#989FA1]' : 'bg-[#F5F7F8]'
            }`}
            onClick={() => setSelectedIndex(1)}
          >
            1등
          </span>

          <span
            className={`${tabStyled} ${
              selectedIndex === 3 ? 'bg-[#989FA1]' : 'bg-[#F5F7F8] '
            }`}
            onClick={() => setSelectedIndex(3)}
          >
            2등
          </span>
          <span
            className={`rounded-e-xl py-1 flex-1 text-center ${
              selectedIndex === 4 ? 'bg-[#989FA1]' : 'bg-[#F5F7F8] '
            }`}
            onClick={() => setSelectedIndex(4)}
          >
            3등
          </span>
        </div>
        <div className='w-full max-h-[360px] overflow-y-scroll'>
          {Array.from({ length: 20 }, (_, index) => (
            <div key={index} className='flex justify-evenly w-full'>
              <span>1등</span>
              <span>홍길동</span>
              <span>010-3333-2222</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RaffleWinnerList;

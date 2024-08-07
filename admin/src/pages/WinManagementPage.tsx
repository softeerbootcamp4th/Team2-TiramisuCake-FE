import NumberOfWinnersModal from '@/components/WinManagement/NumberOfWinnersModal';
import WinnerListModal from '@/components/WinManagement/WinnerListModal';
import WinnersProbabilitiesModal from '@/components/WinManagement/WinnersProbabilitiesModal';
import { useState } from 'react';

const WinManagementPage = () => {
  const [numberModalOpen, setNumberModalOpen] = useState(true);
  const [probabilitiesModalOpen, setProbabilitiesModalOpen] = useState(true);
  const [winnerListModal, setWinnerListModal] = useState(true);

  return (
    <div className='min-w-screen max-h-screen p-11'>
      <div className=' flex  flex-col justify-evenly bg-[#F3F5F7] px-10 py-[3rem] items-center gap-10'>
        <div className='flex flex-col w-full gap-2.5 items-center'>
          <h1 className='text-4xl font-bold'>당첨 관리</h1>
          <p className='text-sm mb-1'>
            선착순 당첨 인원 수 설정 / 당첨 / 당첨자 목록 조회
          </p>
        </div>
        <div className='flex w-full h-full'>
          <div className='w-full'></div>
          <div className='w-full flex gap-10'>
            <div className='flex flex-col gap-8'>
              {numberModalOpen ? (
                <NumberOfWinnersModal
                  handleClose={() => setNumberModalOpen(false)}
                />
              ) : (
                <div className='w-[265px] h-[182px]'></div>
              )}
              {probabilitiesModalOpen ? (
                <WinnersProbabilitiesModal
                  handleClose={() => setProbabilitiesModalOpen(false)}
                />
              ) : (
                <div className='w-[265px] h-[330px]'></div>
              )}
            </div>
            <div>
              {winnerListModal ? (
                <WinnerListModal
                  handleClose={() => setWinnerListModal(false)}
                />
              ) : (
                <div className='w-[374px] h-[548px]'></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinManagementPage;

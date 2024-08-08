import NumberOfWinnersModal from '@/components/WinManagement/NumberOfWinnersModal';
import WinnerListModal from '@/components/WinManagement/FCFSWinnerListModal';
import WinnersProbabilitiesModal from '@/components/WinManagement/WinnersProbabilitiesModal';
import { useState } from 'react';
import RaffleWinnerListModal from '@/components/WinManagement/RaffleWinnerListModal';
import FCFSWinnerListModal from '@/components/WinManagement/FCFSWinnerListModal';
import SetFCFSWinnerContainer from '@/components/common/Container/SetFCFSWinnerContainer';
import SetRaffleWinnerContainer from '@/components/common/Container/SetRaffleWinnerContainer';
import WinnersListContainer from '@/components/common/Container/WinnersListContainer';

type WinnerListModal = {
  state: 'raffle' | 'FCFS';
};

const WinManagementPage = () => {
  const [numberModalOpen, setNumberModalOpen] = useState(false);
  const [probabilitiesModalOpen, setProbabilitiesModalOpen] = useState(false);
  const [winnerListModal, setWinnerListModal] = useState<WinnerListModal>({
    state: 'raffle',
  });
  const [winnerListModalOpen, setWinnerListModalOpen] = useState(false);

  return (
    <div className='min-w-screen max-h-screen p-11'>
      <div className=' flex  flex-col  bg-[#F3F5F7] px-10 py-[3rem] items-center gap-10'>
        <div className='flex flex-col w-full gap-2.5 items-center'>
          <h1 className='text-4xl font-bold'>당첨 관리</h1>
          <p className='text-sm mb-1'>
            선착순 당첨 인원 수 설정 / 당첨 / 당첨자 목록 조회
          </p>
        </div>
        <div className='flex w-full h-full gap-10 mx-auto justify-evenly'>
          <div className='w-full flex flex-col items-center justify-center'>
            <SetFCFSWinnerContainer
              pageType='manage'
              handleModalOpen={() => setNumberModalOpen(true)}
            />
            <SetRaffleWinnerContainer
              pageType='manage'
              handleModalOpen={() => setProbabilitiesModalOpen(true)}
            />
            <WinnersListContainer
              pageType='manage'
              handleModalOpen={() => setWinnerListModalOpen(true)}
              selectRaffleModal={() => setWinnerListModal({ state: 'raffle' })}
              selectFCFSModal={() => setWinnerListModal({ state: 'FCFS' })}
            />
          </div>
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
              {winnerListModalOpen ? (
                winnerListModal.state === 'raffle' ? (
                  <RaffleWinnerListModal
                    handleClose={() => setWinnerListModalOpen(false)}
                  />
                ) : (
                  <FCFSWinnerListModal
                    handleClose={() => setWinnerListModalOpen(false)}
                  />
                )
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

import NumberOfWinnersModal from '@/components/WinManagement/NumberOfWinnersModal';
import WinnerListModal from '@/components/WinManagement/FCFSWinnerListModal';
import { useEffect, useState } from 'react';
import RaffleWinnerListModal from '@/components/WinManagement/RaffleWinnerListModal';
import FCFSWinnerListModal from '@/components/WinManagement/FCFSWinnerListModal';
import SetFCFSWinnerContainer from '@/components/common/Container/SetFCFSWinnerContainer';
import SetRaffleWinnerContainer from '@/components/common/Container/SetRaffleWinnerContainer';
import WinnersListContainer from '@/components/common/Container/WinnersListContainer';
import { useWinnerData } from '@/apis/main/query';
import { DrawEventList, FCFSEventList } from '@/type/main/type';
import WinnersProbabilitiesModal from '@/components/WinManagement/WinnersProbabilitiesModal';

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

  const [FCFSList, setFCFSList] = useState<FCFSEventList[]>([]);
  const [drawList, setDrawList] = useState<DrawEventList[]>([]);

  const { data } = useWinnerData();
  console.log(data);

  useEffect(() => {
    if (data) {
      setFCFSList(data.result.fcfsEventList);
      setDrawList(data.result.drawEventList);
      console.log(data.result.drawEventList);
    }
  }, [data]);

  if (!data) return <>Loading...</>;

  return (
    <div className='min-w-screen h-full m-10 flex-1 bg-[#F3F5F7] flex  flex-col items-center gap-10'>
      <div className='flex flex-col w-full gap-2.5 items-center mt-8'>
        <h1 className='text-4xl font-bold'>당첨 관리</h1>
        <p className='text-sm mb-1'>
          선착순 당첨 인원 수 설정 / 당첨 / 당첨자 목록 조회
        </p>
      </div>
      <div className='flex w-full h-full gap-10 ml-16 justify-evenly'>
        <div className='w-full flex flex-col items-center justify-center'>
          <SetFCFSWinnerContainer
            FCFSList={FCFSList}
            pageType='manage'
            handleModalOpen={() => setNumberModalOpen(true)}
          />
          <SetRaffleWinnerContainer
            drawList={drawList}
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
        <div className='w-full flex gap-10 mt-4'>
          <div className='flex flex-col gap-7'>
            {numberModalOpen ? (
              <NumberOfWinnersModal
                winnerNum={data?.result.fcfsEventList[0].winnerNum}
                handleClose={() => setNumberModalOpen(false)}
              />
            ) : (
              <div className='w-[265px] h-[182px]'></div>
            )}
            {probabilitiesModalOpen ? (
              <WinnersProbabilitiesModal
                drawEventList={drawList}
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
  );
};

export default WinManagementPage;

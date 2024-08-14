import { useWinnerData } from '@/apis/main/query';
import SetFCFSWinnerContainer from '../common/Container/SetFCFSWinnerContainer';
import SetRaffleWinnerContainer from '../common/Container/SetRaffleWinnerContainer';
import WinnersListContainer from '../common/Container/WinnersListContainer';
import { useEffect, useState } from 'react';

const WinnerManagement = () => {
  const { data } = useWinnerData();
  console.log(data);
  const [FCFSList, setFCFSList] = useState([]);
  const [drawList, setDrawList] = useState([]);

  useEffect(() => {
    if (data) {
      setFCFSList(data.result.fcfsEventList);
      setDrawList(data.result.drawEventList);
    }
  }, [data]);

  if (!data) return <>Loading...</>;

  return (
    <>
      <SetFCFSWinnerContainer FCFSList={FCFSList} />
      <SetRaffleWinnerContainer drawList={drawList} />
      <WinnersListContainer />
    </>
  );
};

export default WinnerManagement;

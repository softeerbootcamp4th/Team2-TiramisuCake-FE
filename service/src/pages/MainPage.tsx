import RendingSection from '@/components/MainPage/RendingSection';
import CarInfoSection from '@/components/MainPage/CarInfoSection/CarInfoSection';
import FcfsSection from '@/components/MainPage/FcfsSection/FcfsSection';
import LoadingPage from '@/components/Loading/Loading';
import { EventInfo } from '@/types/main/eventInfoType';
import { useDynamicEventInfo, useStaticEventInfo } from '@/apis/main/query';
import DrawSection from '@/components/MainPage/DrawSection/DrawSection';
import EventIntroductionSection from '@/components/MainPage/EventIntroductionSection';
import { useTabContext } from '@/store/context/useTabContext';
import useSectionObserver from '@/hooks/MainPage/useSectionObserver';

const MainPage = () => {
  const { setActiveTab } = useTabContext();
  const { dynamicData, isDynamicLoading } = useDynamicEventInfo();
  const { staticData, isStaticLoading } = useStaticEventInfo();
  const setRef = useSectionObserver(setActiveTab);

  if (isDynamicLoading || isStaticLoading) return <LoadingPage />;

  return (
    <div
      className='snap-y snap-mandatory overflow-auto h-screen'
      id='container'
    >
      <div ref={(el) => setRef(el, 0)} id='rending'>
        <RendingSection />
      </div>
      <div ref={(el) => setRef(el, 1)} id='event'>
        <EventIntroductionSection />
      </div>
      <div ref={(el) => setRef(el, 2)} id='fcfs'>
        <FcfsSection
          fcfsInfo={dynamicData?.result.fcfsInfo as string}
          fcfsStartTime={dynamicData?.result.fcfsStartTime as string}
          eventInfo={staticData?.result.eventInfoList[0] as EventInfo}
        />
      </div>
      <div ref={(el) => setRef(el, 3)} id='draw'>
        <DrawSection
          totalDrawWinner={dynamicData?.result.totalDrawWinner as string}
          remainDrawCount={dynamicData?.result.remainDrawCount as string}
          eventInfo={staticData?.result.eventInfoList[1] as EventInfo}
        />
      </div>
      <div ref={(el) => setRef(el, 4)} id='ioniq5'>
        <CarInfoSection />
      </div>
    </div>
  );
};

export default MainPage;

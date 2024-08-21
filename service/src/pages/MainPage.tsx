import { useRef } from 'react';
import { useTabContext } from '@/store/context/useTabContext';
import RendingSection from '@/components/MainPage/RendingSection';
import CarInfoSection from '@/components/MainPage/CarInfoSection/CarInfoSection';
import useScrollControl from '@/hooks/MainPage/useScrollControl';
import FcfsSection from '@/components/MainPage/FcfsSection/FcfsSection';
import LoadingPage from '@/components/Loading/Loading';
import { EventInfo } from '@/types/main/eventInfoType';
import { useDynamicEventInfo, useStaticEventInfo } from '@/apis/main/query';
import DrawSection from '@/components/MainPage/DrawSection/DrawSection';
import EventIntroductionSection from '@/components/MainPage/EventIntroductionSection';

const MainPage = () => {
  const { activeTab, setActiveTab } = useTabContext();
  const { dynamicData, isDynamicLoading } = useDynamicEventInfo();
  const { staticData, isStaticLoading } = useStaticEventInfo();
  const rendingSectionRef = useRef<HTMLDivElement>(null);
  const eventSectionRef = useRef<HTMLDivElement>(null);
  const carInfoSectionRef = useRef<HTMLDivElement>(null);
  const fcfsSectionRef = useRef<HTMLDivElement>(null);

  useScrollControl({
    rendingSectionRef,
    eventSectionRef,
    carInfoSectionRef,
    activeTab,
    fcfsSectionRef,
    setActiveTab,
  });

  if (isDynamicLoading || isStaticLoading) return <LoadingPage />;

  return (
    <div className='snap-y snap-mandatory overflow-auto flex flex-col h-screen'>
      <div ref={rendingSectionRef}>
        <RendingSection onArrowClick={() => setActiveTab('event')} />
      </div>
      <div ref={eventSectionRef}>
        <EventIntroductionSection
          handleArrowClick={() => setActiveTab('fcfs')}
        />
      </div>
      <div ref={fcfsSectionRef}>
        <FcfsSection
          fcfsInfo={dynamicData?.result.fcfsInfo as string}
          fcfsHint={dynamicData?.result.fcfsHint as string}
          fcfsStartTime={dynamicData?.result.fcfsStartTime as string}
          eventInfo={staticData?.result.eventInfoList[0] as EventInfo}
        />
      </div>
      <DrawSection
        totalDrawWinner={dynamicData?.result.totalDrawWinner as string}
        remainDrawCount={dynamicData?.result.remainDrawCount as string}
        eventInfo={staticData?.result.eventInfoList[1] as EventInfo}
      />
      <div ref={carInfoSectionRef}>
        <CarInfoSection />
      </div>
    </div>
  );
};

export default MainPage;

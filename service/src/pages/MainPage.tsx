import { useRef } from 'react';
import { useTabContext } from '@/store/context/useTabContext';
import RendingSection from '@/components/MainPage/RendingSection';
import CarInfoSection from '@/components/MainPage/CarInfoSection/CarInfoSection';
import useScrollControl from '@/hooks/MainPage/useScrollControl';
import FcfsSection from '@/components/MainPage/FcfsSection/FcfsSection';
import LoadingPage from '@/components/Loading/Loading';
import { EventInfo } from '@/types/main/eventInfoType';
import { useDynamicEventInfo, useStaticEventInfo } from '@/apis/main/query';
import EventIntroduction from '@/components/MainPage/EventSection/EventIntroduction';
import DrawSection from '@/components/MainPage/DrawSection/DrawSection';

const MainPage = () => {
  const { activeTab, setActiveTab } = useTabContext();
  const { dynamicData, isDynamicLoading } = useDynamicEventInfo();
  const { staticData, isStaticLoading } = useStaticEventInfo();

  const rendingSectionRef = useRef<HTMLDivElement>(null);
  const eventSectionRef = useRef<HTMLDivElement>(null);
  const carInfoSectionRef = useRef<HTMLDivElement>(null);

  useScrollControl({
    rendingSectionRef,
    eventSectionRef,
    carInfoSectionRef,
    activeTab,
    setActiveTab,
  });

  if (isDynamicLoading || isStaticLoading) return <LoadingPage />;

  return (
    <div className='snap-y snap-mandatory overflow-auto h-screen'>
      <div ref={rendingSectionRef}>
        <RendingSection onArrowClick={() => setActiveTab('event')} />
      </div>
      <div ref={eventSectionRef}>
        <EventIntroduction onArrowClick={() => setActiveTab('event')} />
      </div>
      <FcfsSection
        fcfsInfo={dynamicData?.result.fcfsInfo as string}
        fcfsStartTime={dynamicData?.result.fcfsStartTime as string}
        eventInfo={staticData?.result.eventInfoList[0] as EventInfo}
      />
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

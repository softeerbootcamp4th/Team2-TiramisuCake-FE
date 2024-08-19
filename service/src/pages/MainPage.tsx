import { useRef } from 'react';
import { useTabContext } from '@/store/context/useTabContext';
import EventSection from '@/components/MainPage/EventSection/EventSection';
import RendingSection from '@/components/MainPage/RendingSection';
import CarInfoSection from '@/components/MainPage/CarInfoSection/CarInfoSection';
import useScrollControl from '@/hooks/MainPage/useScrollControl';
import FcfsSection from '@/components/MainPage/FcfsSection/FcfsSection';
import { useEventInfo } from '@/apis/main/query';
import LoadingPage from '@/components/Loading/Loading';
import { EventInfo } from '@/types/main/eventInfoType';
const MainPage = () => {
  const { activeTab, setActiveTab } = useTabContext();
  const { data, isLoading } = useEventInfo();

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

  if (isLoading) return <LoadingPage />;

  return (
    <>
      <div ref={rendingSectionRef}>
        <RendingSection onArrowClick={() => setActiveTab('event')} />
      </div>
      <div ref={eventSectionRef}>
        <EventSection onArrowClick={() => setActiveTab('ioniq5')} />
      </div>
      <FcfsSection
        fcfsInfo={data?.result.fcfsInfo as string}
        eventInfo={data?.result.eventInfoList[1] as EventInfo}
      />
      <div ref={carInfoSectionRef}>
        <CarInfoSection />
      </div>
    </>
  );
};

export default MainPage;

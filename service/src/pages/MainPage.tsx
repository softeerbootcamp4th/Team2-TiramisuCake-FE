import { useRef } from 'react';
import { useTabContext } from '@/store/context/useTabContext';
import EventSection from '@/components/MainPage/EventSection/EventSection';
import RendingSection from '@/components/MainPage/RendingSection';
import CarInfoSection from '@/components/MainPage/CarInfoSection/CarInfoSection';
import useScrollControl from '@/hooks/MainPage/useScrollControl';
const MainPage = () => {
  const { activeTab, setActiveTab } = useTabContext();

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

  return (
    <>
      <div ref={rendingSectionRef}>
        <RendingSection onArrowClick={() => setActiveTab('event')} />
      </div>
      <div ref={eventSectionRef}>
        <EventSection onArrowClick={() => setActiveTab('ioniq5')} />
      </div>
      <div ref={carInfoSectionRef}>
        <CarInfoSection />
      </div>
    </>
  );
};

export default MainPage;

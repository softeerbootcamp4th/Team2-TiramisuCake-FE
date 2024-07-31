import CarInfoSection from '@/components/MainPage/CarInfoSection';
import EventSection from '@/components/MainPage/EventSection';
import RendingSection from '@/components/MainPage/RendingSection';
import { useEffect, useRef } from 'react';
import { useTabContext } from '@/hooks/useTabContext';

const MainPage = () => {
  const { activeTab, setActiveTab } = useTabContext();

  const rendingSectionRef = useRef<HTMLDivElement>(null);
  const eventSectionRef = useRef<HTMLDivElement>(null);
  const carInfoSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let sectionRef: React.RefObject<HTMLDivElement> | null = null;
    switch (activeTab) {
      case 'event':
        sectionRef = eventSectionRef;
        break;
      case 'ioniq5':
        sectionRef = carInfoSectionRef;
        break;
      default:
        sectionRef = rendingSectionRef;
        break;
    }
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeTab]);

  return (
    <>
      <div ref={rendingSectionRef}>
        <RendingSection onArrowClick={() => setActiveTab('event')} />
      </div>
      <div ref={eventSectionRef}>
        <EventSection
          startDate="2024.09.02"
          endDate="2024.09.15"
          onArrowClick={() => setActiveTab('ioniq5')}
        />
      </div>
      <div ref={carInfoSectionRef}>
        <CarInfoSection />
      </div>
    </>
  );
};

export default MainPage;

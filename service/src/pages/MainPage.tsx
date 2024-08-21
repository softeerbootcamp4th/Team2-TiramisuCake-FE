import { useEffect, useRef } from 'react';
import RendingSection from '@/components/MainPage/RendingSection';
import CarInfoSection from '@/components/MainPage/CarInfoSection/CarInfoSection';
import FcfsSection from '@/components/MainPage/FcfsSection/FcfsSection';
import LoadingPage from '@/components/Loading/Loading';
import { EventInfo } from '@/types/main/eventInfoType';
import { useDynamicEventInfo, useStaticEventInfo } from '@/apis/main/query';
import DrawSection from '@/components/MainPage/DrawSection/DrawSection';
import EventIntroductionSection from '@/components/MainPage/EventIntroductionSection';
import { useTabContext } from '@/store/context/useTabContext';

const MainPage = () => {
  const { setActiveTab } = useTabContext(); // Tab context 사용
  const { dynamicData, isDynamicLoading } = useDynamicEventInfo();
  const { staticData, isStaticLoading } = useStaticEventInfo();

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // 50% 이상 보일 때 activeTab 변경
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [setActiveTab]);

  if (isDynamicLoading || isStaticLoading) return <LoadingPage />;

  return (
    <div className='snap-y snap-mandatory overflow-auto h-screen'>
      <div ref={(el) => (sectionRefs.current[0] = el)} id='rending'>
        <RendingSection />
      </div>
      <div ref={(el) => (sectionRefs.current[1] = el)} id='event'>
        <EventIntroductionSection />
      </div>
      <div ref={(el) => (sectionRefs.current[2] = el)} id='fcfs'>
        <FcfsSection
          fcfsInfo={dynamicData?.result.fcfsInfo as string}
          fcfsStartTime={dynamicData?.result.fcfsStartTime as string}
          eventInfo={staticData?.result.eventInfoList[0] as EventInfo}
        />
      </div>
      <div ref={(el) => (sectionRefs.current[3] = el)} id='draw'>
        <DrawSection
          totalDrawWinner={dynamicData?.result.totalDrawWinner as string}
          remainDrawCount={dynamicData?.result.remainDrawCount as string}
          eventInfo={staticData?.result.eventInfoList[1] as EventInfo}
        />
      </div>
      <div ref={(el) => (sectionRefs.current[4] = el)} id='ioniq5'>
        <CarInfoSection />
      </div>
    </div>
  );
};

export default MainPage;

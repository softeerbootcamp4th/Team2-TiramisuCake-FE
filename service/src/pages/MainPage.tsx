import RendingSection from '@/components/MainPage/RendingSection';
import CarInfoSection from '@/components/MainPage/CarInfoSection/CarInfoSection';
import FcfsSection from '@/components/MainPage/FcfsSection/FcfsSection';
import LoadingPage from '@/components/Loading/Loading';
import { useDynamicEventInfo, useStaticEventInfo } from '@/apis/main/query';
import DrawSection from '@/components/MainPage/DrawSection/DrawSection';
import EventIntroductionSection from '@/components/MainPage/EventIntroductionSection/EventIntroductionSection';
import { useTabContext } from '@/store/context/useTabContext';
import useSectionObserver from '@/hooks/MainPage/useSectionObserver';
import EventInfoFooter from '@/components/common/Footer/EventInfoFooter';
import Footer from '@/components/common/Footer/Footer';
import { EventInfo } from '@/types/main/type';

const MainPage = () => {
  const { setActiveTab } = useTabContext();
  const { dynamicData, isDynamicLoading } = useDynamicEventInfo();
  const { staticData, isStaticLoading } = useStaticEventInfo();
  const setRef = useSectionObserver(setActiveTab);

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
      {isStaticLoading || isDynamicLoading ? (
        <LoadingPage />
      ) : (
        <>
          <div ref={(el) => setRef(el, 2)} id='fcfs'>
            <FcfsSection
              fcfsInfo={dynamicData?.result.fcfsInfo as string}
              fcfsHint={dynamicData?.result.fcfsHint as string}
              fcfsStartTime={dynamicData?.result.fcfsStartTime as string | null}
              eventInfo={staticData?.result.eventInfoList[0] as EventInfo}
            />
          </div>
          <div ref={(el) => setRef(el, 3)} id='draw'>
            <DrawSection
              drawInfo={dynamicData?.result.drawInfo as string}
              drawStartTime={dynamicData?.result.drawStartTime ?? '09:00:00'}
              drawEndTime={dynamicData?.result.drawEndTime ?? '23:00:00'}
              totalDrawWinner={dynamicData?.result.totalDrawWinner as string}
              remainDrawCount={dynamicData?.result.remainDrawCount as string}
              eventInfo={staticData?.result.eventInfoList[1] as EventInfo}
            />
          </div>
        </>
      )}

      <div ref={(el) => setRef(el, 4)} id='ioniq5'>
        <CarInfoSection />
      </div>
      <div className='snap-end'>
        <EventInfoFooter />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;

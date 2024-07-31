import CarInfoSection from '@/components/MainPage/CarInfoSection/CarInfoSection';
import EventSection from '@/components/MainPage/EventSection';
import RendingSection from '@/components/MainPage/RendingSection';

function MainPage() {
  return (
    <>
      <RendingSection />
      <EventSection startDate='2024.09.02' endDate='2024.09.15' />
      <CarInfoSection />
    </>
  );
}

export default MainPage;

import Header from './Header';
import VideoPlayer from './VideoPlayer';

const backgroundImage = '/CarSection.png';
const CarInfoSection = () => {
  return (
    <div className='min-h-screen min-w-screen relative'>
      <div
        className='bg-cover bg-center bg-no-repeat min-h-screen min-w-screen flex items-center justify-center blur-sm'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <Header />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <VideoPlayer />
      </div>
    </div>
  );
};
export default CarInfoSection;

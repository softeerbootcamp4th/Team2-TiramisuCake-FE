import { Link } from 'react-router-dom';
import { useTabContext } from '@/store/context/useTabContext';
import { useEffect, useState } from 'react';

const Header = () => {
  const { activeTab, setActiveTab } = useTabContext();
  const [visible, setVisible] = useState<boolean>(false);

  console.log(activeTab);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 3000);
  }, []);

  return (
    <header
      className={`bg-white ${visible ? 'opacity-50' : 'opacity-0'} transform duration-300 ease-in-out w-full h-14 flex fixed items-center justify-between px-6 shadow-md z-50`}
    >
      <div className='flex items-center'>
        <Link to='/'>
          <img
            onClick={() => handleTabClick('rending')}
            src='image 113.svg'
            alt='Hyundai logo'
            className='flex-shrink-0 px-2 ml-10 '
            style={{ width: '8.3125rem', height: '1.0625rem' }}
          />
        </Link>
      </div>
      <nav className='flex space-x-12 mr-20 font-Pretendard font-bold'>
        <Link
          to='/'
          onClick={() => handleTabClick('event')}
          className={`${activeTab === ('event' || 'fcfs') ? 'text-green-400' : 'text-black'}`}
        >
          Event
        </Link>
        <Link
          to='/'
          onClick={() => handleTabClick('ioniq5')}
          className={`${activeTab === 'ioniq5' ? 'text-green-400' : 'text-black'}`}
        >
          The new IONIQ 5
        </Link>
      </nav>
    </header>
  );
};

export default Header;

import { Link } from 'react-router-dom';
import { useTabContext } from '@/store/context/useTabContext';
import { useEffect, useState } from 'react';
import { getCookie } from '@/utils/cookie';
import scrollToElementId from '@/utils/scrollToElementId';

const Header = () => {
  const { activeTab, setActiveTab } = useTabContext();
  const [visible, setVisible] = useState<boolean>(false);
  const accessToken = getCookie('accessToken');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    scrollToElementId({ sectionId: tabName, behavior: 'smooth' });
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
          className={`${activeTab === 'event' || activeTab === 'fcfs' || activeTab === 'draw' ? 'text-green-400' : 'text-black'}`}
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
        {accessToken && (
          <Link
            to='/winnig-result'
            onClick={() => handleTabClick('result')}
            className={`${activeTab === 'result' ? 'text-green-400' : 'text-black'}`}
          >
            당첨 내역
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;

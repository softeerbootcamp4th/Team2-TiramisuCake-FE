import { Link } from 'react-router-dom';
import { useTabContext } from '@/store/context/useTabContext';
import { useEffect, useState } from 'react';
import scrollToElementId from '@/utils/scrollToElementId';
import { useLoginContext } from '@/store/context/useLoginContext';
import { useCookies } from 'react-cookie';
import { ROUTER_PATH } from '@/constants/lib/constants';

const Header = () => {
  const { activeTab, setActiveTab } = useTabContext();
  const { isLogined, setIsLogined } = useLoginContext();
  const [visible, setVisible] = useState<boolean>(false);

  const [cookie, , removeCookie] = useCookies(['accessToken']);
  const accessToken = cookie.accessToken;

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    scrollToElementId({ sectionId: tabName, behavior: 'smooth' });
  };

  const handleLogin = () => {
    const currentPath = window.location.pathname.startsWith('/')
      ? window.location.pathname.substring(1)
      : window.location.pathname;
    const commentsPath = `${ROUTER_PATH.COMMENTS_LOUNGE}`;

    if (currentPath === commentsPath) {
      if (accessToken) {
        removeCookie('accessToken', { path: '/' });
        setIsLogined(false);
        window.location.href = '/';
      } else {
        window.location.href = '/';
        handleTabClick('event');
      }
    } else if (accessToken) {
      removeCookie('accessToken', { path: '/' });
      setIsLogined(false);
      // 강제 새로고침
      window.location.reload();
    } else {
      handleTabClick('event');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }, []);

  return (
    <header
      className={`bg-white ${visible ? 'opacity-50' : 'opacity-0'} transform duration-300 ease-in-out w-full h-14 flex fixed items-center justify-between px-6 shadow-md z-50`}
    >
      <div className='flex items-center'>
        <Link to='/'>
          <img
            onClick={() => handleTabClick('rending')}
            src='/svg/hyundai_logo.svg'
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
            to='/winning-result'
            onClick={() => handleTabClick('result')}
            className={`${activeTab === 'result' ? 'text-green-400' : 'text-black'}`}
          >
            당첨 내역
          </Link>
        )}
        <div
          className='cursor-pointer bg-opacity-0  border-primary'
          onClick={handleLogin}
        >
          {isLogined ? '로그아웃' : '로그인'}
        </div>
      </nav>
    </header>
  );
};

export default Header;

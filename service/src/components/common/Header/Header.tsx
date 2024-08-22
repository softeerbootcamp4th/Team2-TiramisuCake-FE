import { Link, useNavigate } from 'react-router-dom';
import { useTabContext } from '@/store/context/useTabContext';
import { useContext, useEffect, useState } from 'react';
import scrollToElementId from '@/utils/scrollToElementId';
import { useLoginContext } from '@/store/context/useLoginContext';
import { useCookies } from 'react-cookie';
import { ROUTER_PATH } from '@/constants/lib/constants';
//import BlockerContext from '@/store/provider/BlockerProvider';

const Header = () => {
  const { activeTab, setActiveTab } = useTabContext();
  const { isLogined, setIsLogined } = useLoginContext();
  const navigate = useNavigate();
  const [visible, setVisible] = useState<boolean>(false);

  const [cookie, , removeCookie] = useCookies(['accessToken']);
  const accessToken = cookie.accessToken;
  //const blocker = useContext(BlockerContext);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    scrollToElementId({ sectionId: tabName, behavior: 'smooth' });
  };

  //todo : blocker context 적용
  const handleLogin = () => {
    //if (blocker?.state === 'proceed') {
    if (accessToken) {
      removeCookie('accessToken', { path: '/' });
      setIsLogined(false);
      // navigate(ROUTER_PATH.MAIN, { replace: true });
    } else {
      // 로그인이 필요할 때의 처리
      // navigate(ROUTER_PATH.MAIN, { replace: true });
      handleTabClick('event');
    }
    // } else {
    //   // Blocker가 활성화된 상태에서 로그아웃을 막기 위해 별도 처리가 필요하면 여기에 작성합니다.
    //   console.warn('Blocker 상태로 인해 로그아웃이 차단되었습니다.');
    // }
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
            to='/winning-result'
            onClick={() => handleTabClick('result')}
            className={`${activeTab === 'result' ? 'text-green-400' : 'text-black'}`}
          >
            당첨 내역
          </Link>
        )}
        <Link
          to='/'
          className=' bg-opacity-0  border-primary'
          onClick={handleLogin}
        >
          {isLogined ? '로그아웃' : '로그인'}
        </Link>
      </nav>
    </header>
  );
};

export default Header;

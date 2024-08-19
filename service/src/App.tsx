import { Outlet } from 'react-router-dom';
import Header from './components/common/Header/Header';
import EventInfoFooter from './components/common/Footer/EventInfoFooter';
import Footer from './components/common/Footer/Footer';
import Tooltip from './components/common/Tooltip/Tooltip';
import { TabProvider } from './store/provider/TabProvider';
import { UrlProvider } from './store/provider/UrlProvider';

const App = () => {
  return (
    <>
      <TabProvider>
        <div className='relative'>
          <Header />
          <main>
            <Outlet />
          </main>
          <EventInfoFooter />
          <Footer />
          <UrlProvider>
            <Tooltip />
          </UrlProvider>
        </div>
      </TabProvider>
    </>
  );
};

export default App;

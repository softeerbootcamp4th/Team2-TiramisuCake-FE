import { Outlet } from 'react-router-dom';
import Header from './components/common/Header/Header';
import EventInfoFooter from './components/common/Footer/EventInfoFooter';
import Footer from './components/common/Footer/Footer';
import Tooltip from './components/common/Tooltip/Tooltip';
import { TabProvider } from './store/provider/TabProvider';

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
          <Tooltip />
        </div>
      </TabProvider>
    </>
  );
};

export default App;

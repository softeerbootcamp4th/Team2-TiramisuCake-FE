import { Outlet } from 'react-router-dom';
import Header from './components/common/Header/Header';
import EventInfoFooter from './components/common/Footer/EventInfoFooter';
import Footer from './components/common/Footer/Footer';
import Tooltip from './components/common/Tooltip/Tooltip';
import { TabProvider } from './store/context/TabContext';

const App = () => {
  return (
    <>
      <TabProvider>
        <div className="relative">
          <Header />
          <main className="pt-14">
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

import { Outlet } from 'react-router-dom';
import Header from './components/common/Header';
import UserContextProvider from './store/provider/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <div className='min-w-screen min-h-screen flex flex-col'>
        <Header />
        <Outlet />
      </div>
    </UserContextProvider>
  );
}

export default App;

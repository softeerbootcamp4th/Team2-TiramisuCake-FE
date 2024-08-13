import { getCookie } from '@/utils/cookie';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const accessToken = getCookie('accessToken');

  if (!accessToken) {
    return <Navigate to='/' replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;

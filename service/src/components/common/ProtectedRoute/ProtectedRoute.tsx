import { getCookie } from '@/utils/cookie';
import { Outlet } from 'react-router-dom';
import UnAuthorizedPage from '@/components/ErrorPage/UnauthorizedPage';
const ProtectedRoute = () => {
  const accessToken = getCookie('accessToken');

  if (!accessToken) {
    return <UnAuthorizedPage />;
  }
  return <Outlet />;
};

export default ProtectedRoute;

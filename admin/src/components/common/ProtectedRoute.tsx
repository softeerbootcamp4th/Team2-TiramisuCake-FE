import { useCookies } from 'react-cookie';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const [cookies] = useCookies(['accessToken']);

  const accessToken = cookies.accessToken;

  if (!accessToken) {
    return <Navigate to='/' replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;

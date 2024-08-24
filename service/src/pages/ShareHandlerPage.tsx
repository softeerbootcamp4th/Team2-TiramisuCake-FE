import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingPage from '../components/Loading/Loading';

const ShareHandlerPage = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      localStorage.setItem('shareCode', code);
      navigate('/');
    } else {
      navigate('/');
    }
  }, [code, navigate]);

  return <LoadingPage />;
};

export default ShareHandlerPage;

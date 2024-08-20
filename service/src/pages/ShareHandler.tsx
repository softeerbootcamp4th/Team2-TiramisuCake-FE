import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingPage from '../components/Loading/Loading';

const ShareHandler = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      localStorage.setItem('code', code);
      navigate('/');
    } else {
      navigate('/');
    }
  }, [code, navigate]);

  return <LoadingPage />;
};

export default ShareHandler;

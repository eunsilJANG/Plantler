import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useAuth } from './AuthContext';

export const OAuthLogin = () => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { token, provider, user_nick, user_id } = useParams();
  const [cookie, setCookie] = useCookies();

  useEffect(() => {
    if (!token) return;

    // 쿼리 파라미터에서 user_id를 가져오기
    const queryParams = new URLSearchParams(window.location.search);
    const user_id = queryParams.get('id'); // 쿼리 파라미터에서 'id'를 가져옴

    const now = new Date();
    const expires = new Date(now.setMonth(now.getMonth() + 1));
    // console.log(decodeURIComponent(user_nick), user_nick);
    setCookie('token', token, { expires, path: '/' });
    setCookie('provider', provider, { expires, path: '/' });
    setCookie('user_nick', user_nick, { expires, path: '/' });
    setCookie('user_id', user_id, { expires, path: '/' });
    setIsLoggedIn(true);
    navigate('/login');
  }, [token]);
  return <></>;
};

export const OAuthLogout = () => {
  const navigate = useNavigate();
  const { status } = useParams();
  useEffect(() => {
    if (status === 'success') {
      navigate('/');
    } else {
      navigate('/login');
    }
  }, []);
  return <></>;
};

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main: React.FC = () => {
    const navigate = useNavigate();

    const handleGoLogin = () => {
        navigate('/login');
    }

    const handleGoSignUp = () => {
        navigate('/signup')
    }

    const handleGoFeed = () => {
        navigate('/feed')
    }

    const handleGoMusicFeed = () => {
      navigate('/music-feed')
    }
    
    const handleGoUserInfo = () => {
      navigate('/user-info')
    }

  return (
    <>
      메인
      <button onClick={handleGoLogin}>로그인</button>
      <button onClick={handleGoSignUp}>회원가입</button>
      <button onClick={handleGoFeed}>피드 메인</button>
      <button onClick={handleGoMusicFeed}>음악 피드 메인</button>
      <button onClick={handleGoUserInfo}>유저 정보</button>
    </>
  );
};

export default Main;
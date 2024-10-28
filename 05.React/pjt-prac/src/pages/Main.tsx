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
  return (
    <div>
      메인
      <button onClick={handleGoLogin}>로그인</button>
      <button onClick={handleGoSignUp}>회원가입</button>
      <button onClick={handleGoFeed}>피드 메인</button>
    </div>
  );
};

export default Main;
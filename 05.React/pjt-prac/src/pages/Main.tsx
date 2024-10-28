import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const Main: React.FC = () => {
    const navigate = useNavigate();

    const handleGoLogin = () => {
        navigate('/login');
    }
  return (
    <div>
      메인
      <button onClick={handleGoLogin}>로그인</button>
    </div>
  );
};

export default Main;
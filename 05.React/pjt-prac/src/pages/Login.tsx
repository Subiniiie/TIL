import React from 'react';
import Input from '../components/Input';

const Login: React.FC = () => {
  return (
    <div>
      로그인
      <Input formType='login'/>
    </div>
  );
};

export default Login;
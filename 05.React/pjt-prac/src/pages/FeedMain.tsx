import React from 'react';
import { useSelector } from 'react-redux';

const FeedMain: React.FC = () => {
    const { nickname, userId } = useSelector((state: any) => state.userInfo);
  return (
    <div>
      {nickname}
      {userId}
    </div>
  );
};

export default FeedMain;
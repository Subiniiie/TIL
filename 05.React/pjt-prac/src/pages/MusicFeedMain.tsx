import React, { useState } from 'react';
import MusicFeedArticleList from '@/components/MusicFeedArticleList';
import FeedHeader from '@/components/FeedHeader';

const MusicFeedMain: React.FC = () => {
  const [ myNickname, setMynickname ] = useState<string>('수빈');
  const [ myProfileImag, setMyProfileImage ] = useState<string>('public/avatar.png');

  return (
    <div>
      <FeedHeader />
      <MusicFeedArticleList />
    </div>
  );
};

export default MusicFeedMain;
import React, { useState } from 'react';
import MusicFeedArticleList from '@/components/MusicFeedArticleList';
import style from '../styles/FeedMain.module.css'

const MusicFeedMain: React.FC = () => {
  const [ myNickname, setMynickname ] = useState<string>('수빈');
  const [ myProfileImag, setMyProfileImage ] = useState<string>('public/avatar.png');

  return (
    <div>
      <div>
          <img src={myProfileImag} alt='프로필이미지' className={style.profileImage}></img>
        {myNickname}
      </div>
      <MusicFeedArticleList />
    </div>
  );
};

export default MusicFeedMain;
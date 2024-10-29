import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ContentContainer from '@/components/ContentContainer';
import FeedArticleList from '../components/FeedArticleList';
import style from '../styles/FeedMain.module.css'

const FeedMain: React.FC = () => {
    const { nickname, userId, profileImage } = useSelector((state: any) => state.userInfo);
    const [ myNickname, setMynickname ] = useState<string>('수빈');
    const [ myProfileImag, setMyProfileImage ] = useState<string>('public/avatar.png');
    // useEffect(() => {
    //   console.log('redux nickname:', nickname)
    //   setMynickname(nickname)
    //   setMyProfileImage(profileImage)
    // }, [nickname, userId, profileImage])

  return (
    <>
      <div>
          <img src={myProfileImag} alt='프로필이미지' className={style.profileImage}></img>
        {myNickname}
      </div>
      <FeedArticleList />
    </>      
  );
};

export default FeedMain;
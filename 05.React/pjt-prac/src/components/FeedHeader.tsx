import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import style from '../styles/FeedMain.module.css'


const FeedHeader: React.FC = () => {
    const { nickname, userId, profileImage } = useSelector((state: any) => state.userInfo);
    const [ myNickname, setMynickname ] = useState<string>('수빈');
    const [ myProfileImag, setMyProfileImage ] = useState<string>('/avatar.png');
    // useEffect(() => {
    //   console.log('redux nickname:', nickname)
    //   setMynickname(nickname)
    //   setMyProfileImage(profileImage)
    // }, [nickname, userId, profileImage])

    const navigate = useNavigate();

    const goArticleCreate = () => {
      navigate('/feed/create')
    }

    const goMusicArticleCrate = () => {
      navigate('/music-feed/create')
    }

  return (
    <div>
    <img src={myProfileImag} alt='프로필이미지' className={style.profileImage}></img>
  {myNickname}
  <Button onClick={goArticleCreate}>글쓰기</Button>
  <Button onClick={goMusicArticleCrate}>음원 올리기</Button>
</div>
  );
};

export default FeedHeader;
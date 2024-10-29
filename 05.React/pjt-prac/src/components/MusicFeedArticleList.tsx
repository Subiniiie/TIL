import React, { useEffect, useState } from 'react';
import MusicFeedArticleItems from './MusicFeedArticleItems';

export interface myMusicArticle {
    id: number;
    title: string;
}

const MusicFeedArticleList: React.FC = () => {
    const [ myMusicArticles, setMyMusicArticles ] = useState<myMusicArticle[]>([]);
    useEffect(() => {
        setMyMusicArticles([
            {id: 1, title: '노래제목1'},
            {id: 2, title: '노래제목2'}
        ])
    }, [])
  return (
    <div>
      {myMusicArticles.map((musicArticle) => (
        <MusicFeedArticleItems key={musicArticle.id} musicArticle={musicArticle} />
      ))}
    </div>
  );
};

export default MusicFeedArticleList;
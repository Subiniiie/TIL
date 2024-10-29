import React, { useEffect, useState } from 'react';
import FeedArticleItems from './FeedArticleItems';

export interface myArticle  {
  id: number;
  title: string;
  content: string;
}

const FeedArticleList: React.FC = () => {
  const [ myArticles, setMyArticles ] = useState<myArticle[]>([]);
  useEffect(() => {
    setMyArticles([
      {id: 1, title: '노래 좋음', content: '노래 좋아요'},
                  {id: 2, title: '굳굳굳굳', content: '구두두두두두두두두두둥'}
   ] )
  }, [])
  return (
    <div>
      /* content */
      {myArticles.map((article) => (
     <FeedArticleItems key={article.id} article={article}/>
    )
  )}
  </div>
)
};

export default FeedArticleList;
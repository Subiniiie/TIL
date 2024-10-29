import React from 'react';
import  { myArticle }  from './FeedArticleList'

interface FeedArticleItemsProps {
    article: myArticle;
  }

const FeedArticleItems: React.FC<FeedArticleItemsProps> = ({article}) => {
  return (
    <div>
        {article.title}
        {article.content}
    </div>
  );
};

export default FeedArticleItems;
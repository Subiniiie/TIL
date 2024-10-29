import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeedArticleDetail from '@/pages/FeedArticleDetail';
import  { myArticle }  from './FeedArticleList'
import { Button } from '@chakra-ui/react';

interface FeedArticleItemsProps {
    article: myArticle;
  }

const FeedArticleItems: React.FC<FeedArticleItemsProps> = ({article}) => {
    const navigate = useNavigate();

    const goFeedArticleDetail = () => {
        navigate(`/feed/article/${article.id}`)
    }

  return (
    <Button onClick={goFeedArticleDetail}>
        {article.title}
        {article.content}
    </Button>
  );
};

export default FeedArticleItems;
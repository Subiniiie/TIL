import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeedHeader from '@/components/FeedHeader';
import FeedArticleList from '../components/FeedArticleList';
import ReviewContainer from '@/components/ReviewContainer';
import { Button } from '@chakra-ui/react';

const FeedMain: React.FC = () => {
    const navigate = useNavigate();

    const goArticleCreate = () => {
      navigate('/feed/create')
    }

  return (
    <>
    <FeedHeader />
      <Button onClick={goArticleCreate}>글쓰기</Button>
      <Button>음원 올리기</Button>
      <FeedArticleList />
      <ReviewContainer />
    </>      
  );
};

export default FeedMain;
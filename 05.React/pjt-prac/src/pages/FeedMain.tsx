import React from 'react';
import FeedHeader from '@/components/FeedHeader';
import FeedArticleList from '../components/FeedArticleList';
import ReviewContainer from '@/components/ReviewContainer';

const FeedMain: React.FC = () => {

  return (
    <>
    <FeedHeader />
      <FeedArticleList />
      <ReviewContainer />
    </>      
  );
};

export default FeedMain;
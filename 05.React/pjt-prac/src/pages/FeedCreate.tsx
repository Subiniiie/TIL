import React from 'react';
import FeedHeader from '@/components/FeedHeader';
import CreateArticleInput from '@/components/CreateArticleInput';

const FeedCreate: React.FC = () => {
  return (
    <div>
      <FeedHeader />
      <CreateArticleInput />
    </div>
  );
};

export default FeedCreate;
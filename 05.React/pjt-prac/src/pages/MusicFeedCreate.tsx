import React from 'react';
import FeedHeader from '@/components/FeedHeader';
import CreateArticleInput from '@/components/CreateArticleInput';

const MusicFeedCreate: React.FC = () => {
  return (
    <div>
      <FeedHeader />
      <CreateArticleInput formType='musicFeed' />
    </div>
  );
};

export default MusicFeedCreate;
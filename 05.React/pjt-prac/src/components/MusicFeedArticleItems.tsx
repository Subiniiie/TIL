import React from 'react';
import { useNavigate } from 'react-router-dom';
import { myMusicArticle } from './MusicFeedArticleList';
import { Button } from '@chakra-ui/react';

interface MusicFeedArticleItemsProps {
    musicArticle: myMusicArticle;
}

const MusicFeedArticleItems: React.FC<MusicFeedArticleItemsProps> = ({musicArticle}) => {
    const navigate = useNavigate();

  return (
    <div>
      <Button>
        {musicArticle.title}
      </Button>
    </div>
  );
};

export default MusicFeedArticleItems;
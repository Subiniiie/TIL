import React from 'react';
import { useNavigate } from 'react-router-dom';
import { myMusicArticle } from './MusicFeedArticleList';
import { Button } from '@chakra-ui/react';

interface MusicFeedArticleItemsProps {
    musicArticle: myMusicArticle;
}

const MusicFeedArticleItems: React.FC<MusicFeedArticleItemsProps> = ({musicArticle}) => {
    const navigate = useNavigate();

    const goMusicFeedArticleDetail = () => {
      navigate(`/music-feed/article/${musicArticle.id}`)
    }

  return (
    <div>
      <Button onClick={goMusicFeedArticleDetail}>
        {musicArticle.title}
      </Button>
    </div>
  );
};

export default MusicFeedArticleItems;
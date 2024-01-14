import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CTA, TitleContainer, SharePanel, FullNewsSkeleton } from '../components';
import axios from 'axios';

const FullNews = () => {
  const [news, setNews] = React.useState<{ imageUrl: string; title: string; newsText: string; createdAt: string }>();
  const [isSharePanelOpen, setIsSharePanelOpen] = React.useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchNews() {
      try {
        const { data } = await axios.get('https://64e36310bac46e480e78b878.mockapi.io/news/' + id);
        setNews(data);
      } catch (err) {
        console.log(err);
        navigate('/');
      }
    }

    fetchNews();
  }, [id, navigate]);

  if (!news) {
    return <FullNewsSkeleton />;
  }

  const hadleToggleSharePanel = () => {
    setIsSharePanelOpen(!isSharePanelOpen);
  };

  return (
    <main className='full-news'>
      <TitleContainer name={news.title} place='full-news' path='/news' />
      <span className='full-news__date'>{news.createdAt}</span>
      <img className='full-news__image' src={news.imageUrl} alt='' />
      <p className='full-news__text'>{news.newsText}</p>
      {isSharePanelOpen ? (
        <SharePanel itemTitle={news.title} onClick={hadleToggleSharePanel} />
      ) : (
        <CTA onClick={hadleToggleSharePanel} />
      )}
    </main>
  );
};

export default FullNews;

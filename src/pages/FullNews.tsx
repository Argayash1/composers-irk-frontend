import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CTA, TitleContainer, SharePanel, FullNewsSkeleton } from '../components';
import { handleFormateDate } from '../utils/utils';
import { useAppDispatch } from '../redux/store';
import { fetchNewsById } from '../redux/news/asyncActions';
import { selectNewsData } from '../redux/news/selectors';
import { useSelector } from 'react-redux';

const FullNews = () => {
  const dispatch = useAppDispatch();
  const { item, status } = useSelector(selectNewsData);

  console.log(item);

  const [isSharePanelOpen, setIsSharePanelOpen] = React.useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (id) {
      dispatch(fetchNewsById(id));
    }
  }, [id, dispatch]);

  if (status === 'loading') {
    return <FullNewsSkeleton />;
  }

  const hadleToggleSharePanel = () => {
    setIsSharePanelOpen(!isSharePanelOpen);
  };

  return (
    <main className='full-news'>
      <TitleContainer name={item.title} place='full-news' path='/news' />
      <section>
        <span className='full-news__date'>{handleFormateDate(item.createdAt)}</span>
        <img className='full-news__image' src={item.imageUrl} alt='' />
        <p className='full-news__text'>{item.newsText}</p>
        {isSharePanelOpen ? (
          <SharePanel itemTitle={item.title} onClick={hadleToggleSharePanel} />
        ) : (
          <CTA onClick={hadleToggleSharePanel} />
        )}
      </section>
    </main>
  );
};

export default FullNews;

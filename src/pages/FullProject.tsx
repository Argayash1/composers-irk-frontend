import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CTA, TitleContainer, SharePanel, FullProjectSkeleton, TextContent } from '../components';
import { useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';
import { selectProjectsData } from '../redux/project/selectors';
import { fetchProjectById } from '../redux/project/asyncActions';

const FullProject = () => {
  const dispatch = useAppDispatch();
  const { item: projectItem, status } = useSelector(selectProjectsData);

  const [isSharePanelOpen, setIsSharePanelOpen] = React.useState<boolean>(false);

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (id) {
      dispatch(fetchProjectById(id));
    }
  }, [id, dispatch]);

  const handleToggleSharePanel = () => {
    setIsSharePanelOpen(!isSharePanelOpen);
  };

  if (status === 'loading') {
    return <FullProjectSkeleton />;
  }

  return (
    <main className='full-project'>
      <TitleContainer name={projectItem.title} place='full-project' path='/projects' />
      <section className='full-project__container'>
        <img className='full-project__image' src={projectItem.imageUrl} alt='' />
        <TextContent text={projectItem.description} place='full-project' />
        {isSharePanelOpen ? (
          <SharePanel itemTitle={projectItem.title} onClick={handleToggleSharePanel} />
        ) : (
          <CTA onClick={handleToggleSharePanel} place='full-project' />
        )}
      </section>
    </main>
  );
};

export default FullProject;

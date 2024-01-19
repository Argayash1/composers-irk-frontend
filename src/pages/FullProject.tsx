import React from 'react';
import { useParams } from 'react-router-dom';
import { CTA, TitleContainer, SharePanel, FullProjectSkeleton } from '../components';
import { projectsArray } from '../utils/projectsArray';
import { TextContent } from '../components/TextContent';

const FullProject = () => {
  const [project, setProject] = React.useState<{ imageUrl: string; title: string; description: string[] }>();
  const [isSharePanelOpen, setIsSharePanelOpen] = React.useState<boolean>(false);

  const { id } = useParams();

  React.useEffect(() => {
    const newsObject = projectsArray[Number(id)];
    setProject(newsObject);
  }, [id]);

  const handleToggleSharePanel = () => {
    setIsSharePanelOpen(!isSharePanelOpen);
  };

  if (!project) {
    return <FullProjectSkeleton />;
  }

  return (
    <main className='full-project'>
      <TitleContainer name={project.title} place='full-project' path='/projects' />
      <section className='full-project__container'>
        <img className='full-project__image' src={project.imageUrl} alt='' />
        <TextContent textArray={project.description} place='full-project' />
        {isSharePanelOpen ? (
          <SharePanel itemTitle={project.title} onClick={handleToggleSharePanel} />
        ) : (
          <CTA onClick={handleToggleSharePanel} place='full-project' />
        )}
      </section>
    </main>
  );
};

export default FullProject;

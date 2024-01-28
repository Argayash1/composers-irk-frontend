import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CTA, TitleContainer, SharePanel, FullProjectSkeleton, TextContent } from '../components';
import axios from 'axios';
import { localApi } from '../utils/constants';

const FullProject = () => {
  const [project, setProject] = React.useState<{ imageUrl: string; title: string; description: string[] }>();
  const [isSharePanelOpen, setIsSharePanelOpen] = React.useState<boolean>(false);

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchUnionMember() {
      try {
        const { data } = await axios.get(`${localApi}/projects/${id}`);
        setProject(data);
      } catch (err) {
        console.log(err);
        navigate('/');
      }
    }

    fetchUnionMember();
  }, [id, navigate]);

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

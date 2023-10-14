import React from 'react';
import { projectArray } from '../utils/projectsArray';
import { ProjectBlock } from '../components/ProjectBlock';
import { PageTitle } from '../components';

const Projects: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Проекты';
  }, []);

  return (
    <div className='projects'>
      <PageTitle name='Проекты' />
      <ul className='projects__list'>
        {projectArray.map((project, index) => (
          <li key={index}>
            <ProjectBlock index={index} {...project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;

import React from 'react';
import { projectArray } from '../utils/projectsArray';
import { ProjectBlock } from '../components/ProjectBlock';

const Projects: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Проекты';
  }, []);

  return (
    <div className='projects'>
      <h1 className='projects__title'>Проекты</h1>
      <ul className='projects__list'>
        {projectArray.map((project, index) => (
          <li key={index}>
            <ProjectBlock {...project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;

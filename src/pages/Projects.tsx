import React from 'react';

const Projects: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Проекты';
  }, []);

  return <div>Projects</div>;
};

export default Projects;

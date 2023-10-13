import React from 'react';
import { CTALink } from '../CTALink';
import './ProjectBlock.scss';

type ProjectBlockProps = {
  imageUrl: string;
  title: string;
  description: string;
};

export const ProjectBlock: React.FC<ProjectBlockProps> = ({ imageUrl, title, description }) => {
  return (
    <div className='project-block'>
      <img className='project-block__image' src={imageUrl} alt={title} />
      <h2 className='project-block__title'>{title}</h2>
      <p className='project-block__description'>{description}</p>
      <CTALink path='/projects' />
    </div>
  );
};

import React from 'react';
import { CTA } from '../CTA';
import './ProjectBlock.scss';

type ProjectBlockProps = {
  _id: string;
  imageUrl: string;
  title: string;
  description: string;
};

export const ProjectBlock = ({ _id, imageUrl, title, description }: ProjectBlockProps) => {
  return (
    <div className='project-block'>
      <img className='project-block__image' src={imageUrl} alt={title} />
      <h2 className='project-block__title'>{title}</h2>
      <p className='project-block__description'>{description}</p>
      <CTA path={`/projects/${_id}`} place='projects' />
    </div>
  );
};

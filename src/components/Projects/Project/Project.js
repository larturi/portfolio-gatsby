import React from 'react';
import { FaShareSquare } from 'react-icons/fa';

const Project = ({ description, title, tecnologias, url }) => {
  return (
    <div className="project-info">
      <h3 className="project-slug">
        {title}
        <p className="icon-link-project">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaShareSquare className="project-icon"></FaShareSquare>
          </a>
        </p>
      </h3>

      <p className="project-desc">{description}</p>
      <div className="project-stack">
        {tecnologias.map(item => {
          return <span key={item.name}>{item.name}</span>;
        })}
      </div>
    </div>
  );
};

export default Project;

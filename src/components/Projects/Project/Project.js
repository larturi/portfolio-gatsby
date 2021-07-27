import React from 'react';
import { FaShareSquare } from 'react-icons/fa';

const Project = ({ description, title, tecnologias, url }) => {
  return (
    <div className="card-info">
      <h3 className="card-slug">
        {title}
        <p className="icon-link-card">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaShareSquare className="card-icon"></FaShareSquare>
          </a>
        </p>
      </h3>

      <p className="card-desc">{description}</p>
      <div className="card-label">
        {tecnologias.map(item => {
          return <span key={item.name}>{item.name}</span>;
        })}
      </div>
    </div>
  );
};

export default Project;

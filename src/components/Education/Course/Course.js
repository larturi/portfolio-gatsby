import '../Education.scss';

import React from 'react';
import { FaShareSquare } from 'react-icons/fa';

const Course = ({ url, name, institution, year, tecnologias, logo, hours }) => {
  return (
    <div className="project-info">
      <h3 className="project-slug">
        {name}
        <p className="icon-link-project">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaShareSquare className="project-icon"></FaShareSquare>
          </a>
        </p>
      </h3>

      <p className="project-desc">
        {hours} horas - {institution} - {year}
      </p>

      <div className="project-stack">
        {tecnologias.map(item => {
          return <span key={item.name}>{item.name}</span>;
        })}
      </div>
    </div>
  );
};

export default Course;

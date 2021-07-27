import '../Education.scss';

import React from 'react';
import { FaShareSquare } from 'react-icons/fa';

const Course = ({ url, name, institution, year, tecnologias, logo, hours }) => {
  return (
    <div className="card-info">
      <h3 className="card-slug">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>

        <p className="icon-link-card">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaShareSquare className="card-icon"></FaShareSquare>
          </a>
        </p>
      </h3>

      <p className="card-desc">
        {hours} horas - {institution} - {year}
      </p>
      <div className="card-label">
        {tecnologias.map(item => {
          return <span key={item.name}>{item.name}</span>;
        })}
      </div>
    </div>
  );
};

export default Course;

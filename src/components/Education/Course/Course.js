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
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to the course"
          >
            <FaShareSquare className="card-icon"></FaShareSquare>
          </a>
        </p>
      </h3>

      <p className="card-desc desc-course">
        {hours} horas - {institution} - {year}
      </p>
      <div className="card-label card-label-course">
        {tecnologias.map(item => {
          return <span key={item.name}>{item.name}</span>;
        })}
      </div>
    </div>
  );
};

export default Course;

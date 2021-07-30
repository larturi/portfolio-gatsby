import '../Education.scss';

import React from 'react';
import IconoFa from '../../IconFa';

const Course = ({ url, name, institution, year, tecnologias, logo, hours }) => {
  return (
    <div className="card-info card-curso">
      <div className="card-info-left">
        <IconoFa name={logo} />
      </div>

      <div className="card-info-right">
        <h3 className="card-slug card-slug-curso">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h3>

        <p className="card-desc desc-course">
          {hours} horas - {institution} - {year}
          {/* <FaShareSquare className="card-icon"></FaShareSquare> */}
        </p>
        <div className="card-label card-label-course">
          {tecnologias.map(item => {
            return <span key={item.name}>{item.name}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;

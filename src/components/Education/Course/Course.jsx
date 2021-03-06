import './Course.scss';

import React from 'react';
import IconoFa from '../../IconFa';
import { useCurrentTheme } from '../../../hooks/useCurrentTheme';

const Course = ({ url, name, institution, year, tecnologias, logo, hours }) => {
  let { currentTheme } = useCurrentTheme();

  return (
    <div className={`card-curso-container ${currentTheme}`}>
      <div className="card-curso-container__logo">
        <IconoFa name={logo} />
      </div>

      <div>
        <h3 className="card-slug card-slug-curso card-curso-container__name">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h3>
      </div>

      <p className="card-curso-container__horas">
        {hours} horas - {institution} - {year}
      </p>

      <div className="card-curso-container__labels-parent">
        <div
          className={`card-label card-curso-container__labels ${currentTheme}`}
        >
          {tecnologias.map(item => {
            return (
              <span key={item.name} className={`icon-tech-curso-square ${currentTheme}`}>
                <IconoFa name={item.logo} />
              </span>
            );
          })}
        </div>
      </div>

      <div className="card-curso-container__footer"></div>
    </div>
  );
};

export default Course;

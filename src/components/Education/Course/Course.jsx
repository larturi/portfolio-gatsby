import '../Education.scss';

import React, { useContext } from 'react';
import IconoFa from '../../IconFa';

import { GlobalStateContext } from '../../../context/GlobalContextProvider';

const Course = ({ url, name, institution, year, tecnologias, logo, hours }) => {
  const state = useContext(GlobalStateContext);

  let currentTheme = state.selectedTheme;
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('theme'))
      currentTheme = localStorage.getItem('theme');
  }

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
        </p>
        <div className={`card-label card-label-course ${currentTheme}`}>
          {tecnologias.map(item => {
            return <span key={item.name}>{item.name}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;

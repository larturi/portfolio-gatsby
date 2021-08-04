import '../Education.scss';

import React, { useContext } from 'react';
import IconoFa from '../../IconFa';

import { GlobalStateContext } from '../../../context/GlobalContextProvider';

const Degree = ({ titulo, universidad, periodo }) => {
  const state = useContext(GlobalStateContext);

  let currentTheme = state.selectedTheme;
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('theme'))
      currentTheme = localStorage.getItem('theme');
  }

  return (
    <div className="card-info card-curso">
      <div className="card-info-left">
        <IconoFa name="university" />
      </div>

      <div className="card-info-right-degree">
        <h3 className="card-slug card-slug-curso">
          {titulo}
          <div className={`education-label ${currentTheme}`}>
            <span>{universidad}</span>
          </div>
        </h3>
        <p className="card-desc education-periodo">{periodo}</p>
      </div>
    </div>
  );
};

export default Degree;

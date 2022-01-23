import '../Education.scss';

import React from 'react';
import IconoFa from '../../IconFa';
import { useCurrentTheme } from '../../../hooks/useCurrentTheme';

const Degree = ({ titulo, universidad, periodo }) => {
  let { currentTheme } = useCurrentTheme();

  return (
    <div
      className={`card-info card-curso ${
        currentTheme === 'dark' ? 'dark' : 'light'
      }`}
    >
      <div className="card-info-left">
        <IconoFa name="university" />
      </div>

      <div className="card-info-right-degree">
        <h3 className="card-slug card-slug-curso">
          {titulo}
          <div className={`education-label ${currentTheme}`}>
            <span style={{
              fontSize: '11px',
              padding: '5px 8px'
            }}>{universidad}</span>
          </div>
        </h3>
        <p className="card-desc education-periodo">{periodo}</p>
      </div>
    </div>
  );
};

export default Degree;

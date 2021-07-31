import '../Education.scss';

import React from 'react';
import IconoFa from '../../IconFa';

const Degree = ({ titulo, universidad, periodo }) => {
  return (
    <div className="card-info card-curso">
      <div className="card-info-left">
        <IconoFa name="university" />
      </div>

      <div className="card-info-right-degree">
        <h3 className="card-slug card-slug-curso">
          {titulo}
          <div className="education-label">
            <span>{universidad}</span>
          </div>
        </h3>
        <p className="card-desc education-periodo">{periodo}</p>
      </div>
    </div>
  );
};

export default Degree;

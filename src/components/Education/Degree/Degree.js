import '../Education.scss';

import React from 'react';

const Degree = ({ titulo, universidad, periodo }) => {
  return (
    <div className="card-info">
      <h3 className="card-slug">
        {titulo}
        <div className="education-label">
          <span>{universidad}</span>
        </div>
      </h3>
      <p className="card-desc education-periodo">{periodo}</p>
    </div>
  );
};

export default Degree;

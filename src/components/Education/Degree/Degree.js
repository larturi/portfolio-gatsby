import '../Education.scss';

import React from 'react';

const Degree = ({ titulo, universidad, periodo }) => {
  return (
    <div className="item-info">
      <h3 className="education-title">{titulo}</h3>
      <h4 className="education-universidad">{universidad}</h4>
      <h5 className="education-periodo">{periodo}</h5>
    </div>
  );
};

export default Degree;

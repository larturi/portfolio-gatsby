import React from 'react';

const SubTitle = ({ title }) => {
  return (
    <div className="section-subtitle">
      <h3>{title || 'default title'}</h3>
      <div className="underline"></div>
    </div>
  );
};

export default SubTitle;
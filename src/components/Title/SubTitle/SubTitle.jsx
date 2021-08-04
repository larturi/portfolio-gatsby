import React from 'react';

const SubTitle = ({ title, theme }) => {
  return (
    <div className="section-subtitle">
      <h3>{title || 'default title'}</h3>
      <div className={`underline-subtitle ${theme}`}></div>
    </div>
  );
};

export default SubTitle;

import React from 'react';

const Title = ({ title, theme }) => {
  return (
    <div className="section-title">
      <h2 className={`${theme}`}>{title || 'default title'}</h2>
      <div className={`underline ${theme}`}></div>
    </div>
  );
};

export default Title;

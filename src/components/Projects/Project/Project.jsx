import React, { useContext } from 'react';
import { GlobalStateContext } from '../../../context/GlobalContextProvider';

const Project = ({ description, title, tecnologias, url }) => {
  const state = useContext(GlobalStateContext);

  let currentTheme = state.selectedTheme;
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('theme'))
      currentTheme = localStorage.getItem('theme');
  }

  return (
    <div className="card-info">
      <h3 className="card-slug">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>

      <p className="card-desc">{description}</p>
      <div className={`card-label ${currentTheme}`}>
        {tecnologias.map(item => {
          return <span key={item.name}>{item.name}</span>;
        })}
      </div>
    </div>
  );
};

export default Project;

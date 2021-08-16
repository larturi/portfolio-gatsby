import React from 'react';
import IconoFa from '../../IconFa';
import { useCurrentTheme } from '../../../hooks/useCurrentTheme';

const Project = ({ description, title, tecnologias, url }) => {
  let { currentTheme } = useCurrentTheme();

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
          return (
            <span key={item.name}>
              <IconoFa name={item.logo} />
              {item.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Project;

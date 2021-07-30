import React from 'react';

const Project = ({ description, title, tecnologias, url }) => {
  return (
    <div className="card-info">
      <h3 className="card-slug">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>

      <p className="card-desc">{description}</p>
      <div className="card-label">
        {tecnologias.map(item => {
          return <span key={item.name}>{item.name}</span>;
        })}
      </div>
    </div>
  );
};

export default Project;

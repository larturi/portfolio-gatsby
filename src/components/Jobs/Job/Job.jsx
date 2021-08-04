import React from 'react';
import { useCurrentTheme } from '../../../hooks/useCurrentTheme';

const Job = props => {
  const { job, index } = props;
  const { puesto, organization, periodo, description } = job;

  let { currentTheme } = useCurrentTheme();

  return (
    <div className="card-info" key={index}>
      <h3 className="card-slug">{puesto}</h3>
      <div className={`card-label ${currentTheme}`}>
        <span>{organization}</span>
      </div>
      <p className="job-date">{periodo}</p>
      <p className="card-desc job-desc">{description}</p>
    </div>
  );
};

export default Job;

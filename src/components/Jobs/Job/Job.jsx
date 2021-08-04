import React, { useContext } from 'react';
import { GlobalStateContext } from '../../../context/GlobalContextProvider';

const Job = props => {
  const { job, index } = props;
  const { puesto, organization, periodo, description } = job;
  const state = useContext(GlobalStateContext);

  let currentTheme = state.selectedTheme;
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('theme'))
      currentTheme = localStorage.getItem('theme');
  }

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

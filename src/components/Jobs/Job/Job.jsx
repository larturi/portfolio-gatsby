import React from 'react';
import { useCurrentTheme } from '../../../hooks/useCurrentTheme';
import IconoFa from '../../IconFa';

const Job = props => {
  const { job, index } = props;
  const { puesto, organization, periodo, description } = job;

  let { currentTheme } = useCurrentTheme();

  return (
    <div className="card-info" key={index}>
      <h3 className="card-slug">{puesto}</h3>
      <div className={`card-label ${currentTheme}`}>
        <span style={{
              fontSize: '14px',
              padding: '5px 10px'
        }}>{organization}</span>
      </div>
      <p className="job-date">{periodo}</p>
      <p className="card-desc job-desc">{description}</p>


      <div 
        className={`card-label card-label-course ${currentTheme}`}
        style={{
          marginTop: '1rem',
        }}
      >
          {job.tecnologias?.map(item => {
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

export default Job;

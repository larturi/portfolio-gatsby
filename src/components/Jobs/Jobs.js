import './Jobs.scss';

import React, { useContext } from 'react';
import Title from '../Title';
import { graphql, useStaticQuery } from 'gatsby';

import { GlobalStateContext } from '../../context/GlobalContextProvider';

const query = graphql`
  {
    jobsES: strapi {
      jobs(locale: "es-AR") {
        description
        fechaDesde
        fechaHasta
        locale
        order
        organization
        periodo
        puesto
        tecnologias {
          logo
          name
        }
      }
    }
    jobsEN: strapi {
      jobs(locale: "en") {
        description
        fechaDesde
        fechaHasta
        locale
        order
        organization
        periodo
        puesto
        tecnologias {
          logo
          name
        }
      }
    }
  }
`;

const Jobs = () => {
  const state = useContext(GlobalStateContext);
  const { jobsES, jobsEN } = useStaticQuery(query);
  const jobs = state.selectedLang === 'es-AR' ? jobsES.jobs : jobsEN.jobs;

  return (
    <section className="section jobs">
      <Title title="experience" />

      <div className="section-center-50">
        {jobs.map((job, index) => {
          return (
            <div className="card-info" key={index}>
              <h3 className="card-slug">{job.puesto}</h3>
              <div className="card-label">
                <span>{job.organization}</span>
              </div>
              <p className="job-date">{job.periodo}</p>
              <p className="card-desc job-desc">{job.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Jobs;

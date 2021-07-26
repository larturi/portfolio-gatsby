import './Jobs.scss';

import React, { useContext } from 'react';
import Title from '../Title';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

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
      <div className="jobs-center">
        {jobs.map((job, index) => {
          return (
            <article key={index} className="job-info">
              <h3>{job.puesto}</h3>
              <h4>{job.organization}</h4>
              <p className="job-date">{job.periodo}</p>
              <div className="job-desc">
                <p>{job.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Jobs;

import './Jobs.scss';

import React, { useContext } from 'react';
import Title from '../Title';
import { graphql, useStaticQuery, Link } from 'gatsby';

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
    titleES: strapi {
      navs(locale: "es-AR", where: { url: "/jobs" }) {
        text
      }
    }
    titleEN: strapi {
      navs(locale: "en", where: { url: "/jobs" }) {
        text
      }
    }
    moreES: strapi {
      translates(locale: "es-AR", where: { slug: "viewMore" }) {
        text
      }
    }
    moreEN: strapi {
      translates(locale: "en", where: { slug: "viewMore" }) {
        text
      }
    }
  }
`;

const Jobs = props => {
  const { items = 0 } = props;

  const state = useContext(GlobalStateContext);
  const { jobsES, jobsEN, titleES, titleEN, moreES, moreEN } =
    useStaticQuery(query);

  const jobs = state.selectedLang === 'es-AR' ? jobsES.jobs : jobsEN.jobs;
  const title =
    state.selectedLang === 'es-AR'
      ? titleES.navs[0].text
      : titleEN.navs[0].text;
  const titleBtnMore =
    state.selectedLang === 'es-AR'
      ? moreES.translates[0].text
      : moreEN.translates[0].text;

  return (
    <section className="section jobs">
      <Title title={title} />

      <div className="section-center-50">
        {items > 0
          ? jobs.map((job, index) => {
              if (index < items) {
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
              }
            })
          : jobs.map((job, index) => {
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

        {items > 0 && (
          <div className="btnCenter">
            <Link to="/jobs" className="btn">
              {titleBtnMore}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Jobs;

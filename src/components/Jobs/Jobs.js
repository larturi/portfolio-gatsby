import './Jobs.scss';

import React, { useContext } from 'react';
import Title from '../Title';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Job from './Job';

import { GlobalStateContext } from '../../context/GlobalContextProvider';

const query = graphql`
  {
    jobsES: strapi {
      jobs(locale: "es-AR", sort: "order:desc") {
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
      jobs(locale: "en", sort: "order:desc") {
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

  let currentLanguaje = state.language;
  let currentTheme = state.selectedTheme;

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('locale'))
      currentLanguaje = localStorage.getItem('locale');

    if (localStorage.getItem('theme'))
      currentTheme = localStorage.getItem('theme');
  }

  const jobs = currentLanguaje === 'es-AR' ? jobsES.jobs : jobsEN.jobs;
  const title =
    currentLanguaje === 'es-AR' ? titleES.navs[0].text : titleEN.navs[0].text;
  const titleBtnMore =
    currentLanguaje === 'es-AR'
      ? moreES.translates[0].text
      : moreEN.translates[0].text;

  return (
    <section className="section jobs">
      <Title title={title} theme={currentTheme === 'dark' ? 'dark' : 'light'} />

      <div className="section-center-50">
        {items > 0
          ? jobs.map((job, index) => {
              if (index < items) {
                return <Job job={job} index={index} key={index} />;
              }
              return null;
            })
          : jobs.map((job, index) => {
              return <Job job={job} index={index} key={index} />;
            })}

        {items > 0 && (
          <div className="btnCenter">
            <Link to="/jobs" className={`btn ${currentTheme}`}>
              {titleBtnMore}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Jobs;

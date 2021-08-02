import './Projects.scss';

import React, { useContext } from 'react';
import Title from '../Title';
import Project from './Project';
import { graphql, useStaticQuery, Link } from 'gatsby';

import { GlobalStateContext } from '../../context/GlobalContextProvider';

const query = graphql`
  {
    projectsES: strapi {
      projects(locale: "es-AR") {
        locale
        order
        tecnologias {
          logo
          name
        }
        title
        url
        description
      }
    }
    projectsEN: strapi {
      projects(locale: "en") {
        locale
        order
        tecnologias {
          logo
          name
        }
        title
        url
        description
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

const Projects = props => {
  const { items = 0 } = props;

  const state = useContext(GlobalStateContext);
  const { projectsES, projectsEN, moreES, moreEN } = useStaticQuery(query);

  let currentLanguaje = state.language;
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('locale'))
      currentLanguaje = localStorage.getItem('locale');
  }

  const projects =
    currentLanguaje === 'es-AR' ? projectsES.projects : projectsEN.projects;

  const titleBtnMore =
    currentLanguaje === 'es-AR'
      ? moreES.translates[0].text
      : moreEN.translates[0].text;

  const theme = currentLanguaje === 'es-AR' ? 'dark' : 'light';

  return (
    <section className="section projects">
      <Title title="Portfolio" />
      <div className="section-center-50">
        {items > 0
          ? projects.map((project, index) => {
              if (index < items) {
                return (
                  <Project key={project.order} index={index} {...project} />
                );
              }
              return null;
            })
          : projects.map((project, index) => {
              return <Project key={project.order} index={index} {...project} />;
            })}

        {items > 0 && (
          <div className="btnCenter">
            <Link to="/projects" className={`btn ${theme}`}>
              {titleBtnMore}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

import './Projects.scss';

import React from 'react';
import Title from '../Title';
import Project from './Project';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { useCurrentTheme } from '../../hooks/useCurrentTheme';
import { useCurrentLanguaje } from '../../hooks/useCurrentLanguaje';

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

  const { projectsES, projectsEN, moreES, moreEN } = useStaticQuery(query);

  let { currentTheme } = useCurrentTheme();
  let { currentLanguaje } = useCurrentLanguaje();

  const projects =
    currentLanguaje === 'es-AR' ? projectsES.projects : projectsEN.projects;

  const titleBtnMore =
    currentLanguaje === 'es-AR'
      ? moreES.translates[0].text
      : moreEN.translates[0].text;

  return (
    <section
      className={
        'section projects ' + (currentTheme === 'dark' ? 'dark ' : 'light ')
      }
    >
      <Title
        title="Portfolio"
        theme={currentTheme === 'dark' ? 'dark' : 'light'}
      />
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
            <Link to="/projects" className={`btn ${currentTheme}`}>
              {titleBtnMore}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

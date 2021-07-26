import './Projects.scss';

import React, { useContext } from 'react';
import Title from '../Title';
import Project from '../Project';
import { graphql, useStaticQuery } from 'gatsby';

import { GlobalStateContext } from '../../context/GlobalContextProvider';

export const query = graphql`
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
  }
`;

const Projects = () => {
  const state = useContext(GlobalStateContext);
  const { projectsES, projectsEN } = useStaticQuery(query);
  const projects =
    state.selectedLang === 'es-AR' ? projectsES.projects : projectsEN.projects;

  return (
    <section className="section projects">
      <Title title="Portfolio" />
      <div className="section-center-50 projects-center">
        {projects.map((project, index) => {
          return <Project key={project.order} index={index} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;

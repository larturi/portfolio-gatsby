// eslint-disable-next-line react-hooks/exhaustive-deps

import React, { useEffect, useState } from 'react';
import Title from '../Title';
import Project from './Project';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { useCurrentTheme } from '../../hooks/useCurrentTheme';
import { useCurrentLanguaje } from '../../hooks/useCurrentLanguaje';
import FilterTech from '../FilterTech/FilterTech';

import './Projects.scss';

const query = graphql`
  {
    projectsES: strapi {
      projects(locale: "es-AR", sort: "order:DESC") {
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
      projects(locale: "en", sort: "order:DESC") {
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

  const [filterTech, setFilterTech] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    // Filter the projects with specific technology
    if (filterTech) {
      const filtered = projects.filter(project => {
        return project.tecnologias.some(tech => {
          return tech.name === filterTech;
        });
      });
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects(projects);
    }
  }, [filterTech, projects]);

  return (
    <section className={'section projects ' + currentTheme}>
      <Title title="Portfolio" theme={currentTheme} />

      <div className="section-center-50">
        <div>
          <FilterTech projects={projects} setFilterTech={setFilterTech} />
        </div>

        {items > 0
          ? filteredProjects.map((project, index) => {
              if (index < items) {
                return (
                  <Project key={project.order} index={index} {...project} />
                );
              }
              return null;
            })
          : filteredProjects?.map((project, index) => {
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

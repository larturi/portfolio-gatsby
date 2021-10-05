import './About.scss';

import React from 'react';
import Title from '../../components/Title';
import IconoFa from '../../components/IconFa';
import { graphql, useStaticQuery } from 'gatsby';
import { useCurrentTheme } from '../../hooks/useCurrentTheme';
import { useCurrentLanguaje } from '../../hooks/useCurrentLanguaje';

const query = graphql`
  {
    aboutES: strapi {
      about(locale: "es-AR") {
        Contact
        info
        locale
        title
        title_stack
      }
    }
    aboutEN: strapi {
      about(locale: "en") {
        Contact
        info
        locale
        title
        title_stack
      }
    }
  }
`;

const About = () => {
  const { aboutES, aboutEN } = useStaticQuery(query);

  let { currentTheme } = useCurrentTheme();
  let { currentLanguaje } = useCurrentLanguaje();

  const about = currentLanguaje === 'es-AR' ? aboutES.about : aboutEN.about;

  return (
    <section
      className={
        'section about-page ' + (currentTheme === 'dark' ? 'dark ' : 'light ')
      }
    >
      <div className="section-center-50 about-center">
        <article
          className={`about-text  ${
            currentTheme === 'dark' ? 'dark ' : 'light '
          }`}
        >
          <Title
            title={about.title}
            theme={currentTheme === 'dark' ? 'dark' : 'light'}
          />
          <p>{about.info}</p>

          <h3>{about.title_stack}</h3>
          <div className={`about-stack ${currentTheme}`}>
            <span><IconoFa name='FaReact'/>React</span>
            <span><IconoFa name='SiDjango'/>Django</span>
            <span><IconoFa name='SiGraphql'/>GraphQL</span>
            <span><IconoFa name='SiBootstrap'/>Bootstrap</span>
            <span><IconoFa name='SiPostgresql'/>PostgreSQL</span>
            <span><IconoFa name='SiDocker'/>Docker</span>
            <span><IconoFa name='FaGithub'/>GitHub</span>
          </div>


        </article>
      </div>
    </section>
  );
};

export default About;

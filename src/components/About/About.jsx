import './About.scss';

import React from 'react';
import Title from '../../components/Title';
import IconoFa from '../../components/IconFa';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
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
      }
    }
    aboutEN: strapi {
      about(locale: "en") {
        Contact
        info
        locale
        title
      }
    }
    skills: strapi {
      tecnologias(limit: 14, sort: "destacado:desc") {
        id
        name
        logo
      }
    }
    img: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;

const About = () => {
  const { aboutES, aboutEN, skills, img } = useStaticQuery(query);

  let { currentTheme } = useCurrentTheme();
  let { currentLanguaje } = useCurrentLanguaje();

  const about = currentLanguaje === 'es-AR' ? aboutES.about : aboutEN.about;

  const { tecnologias } = skills;

  return (
    <section
      className={
        'section about-page ' + (currentTheme === 'dark' ? 'dark ' : 'light ')
      }
    >
      <div className="section-center-50 about-center">
        <GatsbyImage
          image={img.childImageSharp.gatsbyImageData}
          alt="Foto Leandro Arturi"
          className="about-img"
        />

        <article className="about-text">
          <Title
            title={about.title}
            theme={currentTheme === 'dark' ? 'dark' : 'light'}
          />
          <p>{about.info}</p>

          <div className={`about-stack ${currentTheme}`}>
            {tecnologias.map(skill => {
              console.log(skill.logo);
              return (
                <span key={skill.id}>
                  <IconoFa name={skill.logo} />
                  {skill.name}
                </span>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;

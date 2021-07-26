import './About.scss';

import React, { useContext } from 'react';
import Title from '../../components/Title';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { GlobalStateContext } from '../../context/GlobalContextProvider';

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
        name
        id
      }
    }
    img: file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const About = () => {
  const state = useContext(GlobalStateContext);
  const { aboutES, aboutEN, skills, img } = useStaticQuery(query);
  const about = state.selectedLang === 'es-AR' ? aboutES.about : aboutEN.about;

  const { tecnologias } = skills;

  return (
    <section className="about-page">
      <div className="section-center-50 about-center">
        <Img
          fluid={img.childImageSharp.fluid}
          alt="Foto Leandro Arturi"
          className="about-img-svg"
        />
        <article className="about-text">
          <Title title={about.title} />
          <p>{about.info}</p>
          <div className="about-stack">
            {tecnologias.map(skill => {
              return <span key={skill.id}>{skill.name}</span>;
            })}
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;

import './About.scss';

import React, { useContext } from 'react';
import Title from '../../components/Title';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

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
    img: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;

const About = () => {
  const state = useContext(GlobalStateContext);
  const { aboutES, aboutEN, skills, img } = useStaticQuery(query);

  // let currentLanguaje = state.selectedLang;
  // let currentTheme = state.selectedTheme;

  // if (typeof window !== 'undefined') {
  //   if (localStorage.getItem('locale'))
  //     currentLanguaje = localStorage.getItem('locale');

  //   if (localStorage.getItem('theme'))
  //     currentTheme = localStorage.getItem('theme');
  // }

  console.log(localStorage.getItem('theme'));

  // const about = currentLanguaje === 'es-AR' ? aboutES.about : aboutEN.about;

  // const { tecnologias } = skills;

  return (
    <section className="about-page">
      {/* <div className="section-center-50 about-center">
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

          <div className="about-stack">
            {tecnologias.map(skill => {
              return <span key={skill.id}>{skill.name}</span>;
            })}
          </div>
        </article>
      </div> */}
    </section>
  );
};

export default About;

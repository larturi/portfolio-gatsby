// import './Education.scss';

import React, { useContext } from 'react';
import Title from '../../components/Title';
import { graphql, useStaticQuery } from 'gatsby';

import { GlobalStateContext } from '../../context/GlobalContextProvider';

const query = graphql`
  {
    degreeES: strapi {
      educations(locale: "es-AR") {
        info
        locale
        order
        periodo
        titulo
        universidad
      }
    }
    degreeEN: strapi {
      educations(locale: "en") {
        info
        locale
        order
        periodo
        titulo
        universidad
      }
    }
    coursesES: strapi {
      cursos(locale: "es-AR") {
        name
        url
        year
        tecnologias {
          name
        }
        logo
        institution
        hours
        locale
      }
    }
    coursesEN: strapi {
      cursos(locale: "en") {
        name
        url
        year
        tecnologias {
          name
        }
        logo
        institution
        hours
        locale
      }
    }
  }
`;

const Education = () => {
  const state = useContext(GlobalStateContext);
  const { coursesEN, coursesES, degreeEN, degreeES } = useStaticQuery(query);
  const degrees =
    state.selectedLang === 'es-AR' ? degreeES.educations : degreeEN.educations;
  const courses =
    state.selectedLang === 'es-AR' ? coursesES.cursos : coursesEN.cursos;

  return (
    <section className="about-page">
      <p>Hola</p>
    </section>
  );
};

export default Education;

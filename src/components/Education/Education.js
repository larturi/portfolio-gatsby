import './Education.scss';

import React, { useContext } from 'react';
import Title from '../../components/Title';
import { graphql, useStaticQuery } from 'gatsby';
import Degree from './Degree';
import Course from './Course';

import { GlobalStateContext } from '../../context/GlobalContextProvider';

const query = graphql`
  {
    degreeES: strapi {
      educations(locale: "es-AR") {
        info
        periodo
        titulo
        universidad
        order
      }
    }
    degreeEN: strapi {
      educations(locale: "en") {
        info
        periodo
        titulo
        universidad
        order
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
        id
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
        id
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
    <section className="section educations">
      <Title title="Education" />
      <div className="section-center-50 projects-center">
        {degrees.map((degree, index) => {
          return <Degree key={degree.order} index={index} {...degree} />;
        })}
      </div>

      <div className="education-separador" />

      <Title title="Cursos" />
      <div className="section-center-50 projects-center">
        {courses.map((course, index) => {
          return <Course key={index} index={index} {...course} />;
        })}
      </div>
    </section>
  );
};

export default Education;

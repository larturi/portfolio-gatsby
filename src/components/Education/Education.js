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
    titleEducationEN: strapi {
      navs(locale: "en", where: { url: "/education" }) {
        text
      }
    }
    titleEducationES: strapi {
      navs(locale: "es-AR", where: { url: "/education" }) {
        text
      }
    }
    titleCoursesEN: strapi {
      translates(locale: "en", where: { slug: "cursos" }) {
        text
      }
    }
    titleCoursesES: strapi {
      translates(locale: "es-AR", where: { slug: "cursos" }) {
        text
      }
    }
  }
`;

const Education = () => {
  const state = useContext(GlobalStateContext);
  const {
    coursesEN,
    coursesES,
    degreeEN,
    degreeES,
    titleEducationEN,
    titleEducationES,
    titleCoursesEN,
    titleCoursesES,
  } = useStaticQuery(query);

  const degrees =
    state.selectedLang === 'es-AR' ? degreeES.educations : degreeEN.educations;
  const courses =
    state.selectedLang === 'es-AR' ? coursesES.cursos : coursesEN.cursos;
  const titleEducation =
    state.selectedLang === 'es-AR'
      ? titleEducationES.navs[0].text
      : titleEducationEN.navs[0].text;
  const titleCourses =
    state.selectedLang === 'es-AR'
      ? titleCoursesES.translates[0].text
      : titleCoursesEN.translates[0].text;

  return (
    <section className="section educations">
      <Title title={titleEducation} />
      <div className="section-center-50">
        {degrees.map((degree, index) => {
          return <Degree key={degree.order} index={index} {...degree} />;
        })}
      </div>

      <div className="education-separador" />

      <Title title={titleCourses} />
      <div className="section-center-50">
        {courses.map((course, index) => {
          return <Course key={index} index={index} {...course} />;
        })}
      </div>
    </section>
  );
};

export default Education;

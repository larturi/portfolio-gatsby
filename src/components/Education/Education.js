import './Education.scss';

import React, { useContext } from 'react';
import Title from '../../components/Title';
import { graphql, useStaticQuery, Link } from 'gatsby';
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
      cursos(locale: "es-AR", sort: "year:desc") {
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
      cursos(locale: "en", sort: "year:desc") {
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

const Education = props => {
  const { backgroundWhite = false, items = 0 } = props;
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
    moreES,
    moreEN,
  } = useStaticQuery(query);

  let currentLanguaje = state.language;
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('locale'))
      currentLanguaje = localStorage.getItem('locale');
  }

  const degrees =
    currentLanguaje === 'es-AR' ? degreeES.educations : degreeEN.educations;
  const courses =
    currentLanguaje === 'es-AR' ? coursesES.cursos : coursesEN.cursos;
  const titleEducation =
    currentLanguaje === 'es-AR'
      ? titleEducationES.navs[0].text
      : titleEducationEN.navs[0].text;
  const titleCourses =
    currentLanguaje === 'es-AR'
      ? titleCoursesES.translates[0].text
      : titleCoursesEN.translates[0].text;
  const titleBtnMore =
    currentLanguaje === 'es-AR'
      ? moreES.translates[0].text
      : moreEN.translates[0].text;

  const theme = currentLanguaje === 'es-AR' ? 'dark' : 'light';

  return (
    <section
      className={
        'section educations ' + (backgroundWhite && 'background-white')
      }
    >
      <Title
        title={titleEducation}
        theme={theme === 'dark' ? 'dark' : 'light'}
      />
      <div className="section-center-50">
        {degrees.map((degree, index) => {
          return <Degree key={degree.order} index={index} {...degree} />;
        })}
      </div>

      <div className="education-separador" />

      <Title title={titleCourses} theme={theme === 'dark' ? 'dark' : 'light'} />
      <div className="section-center-50">
        {items > 0
          ? courses.map((course, index) => {
              if (index < items) {
                return <Course key={index} index={index} {...course} />;
              }
              return null;
            })
          : courses.map((course, index) => {
              return <Course key={index} index={index} {...course} />;
            })}

        {items > 0 && (
          <div className="btnCenter">
            <Link to="/education" className={`btn ${theme}`}>
              {titleBtnMore}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;

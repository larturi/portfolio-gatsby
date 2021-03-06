import React, { useEffect, useState } from 'react';
import Title from '../../components/Title';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Degree from './Degree';
import Course from './Course';
import { useCurrentTheme } from '../../hooks/useCurrentTheme';
import { useCurrentLanguaje } from '../../hooks/useCurrentLanguaje';
import FilterTech from '../FilterTech/FilterTech';

import './Education.scss';

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
      cursos(locale: "es-AR", sort: "sort:desc") {
        name
        url
        year
        tecnologias {
          name
          logo
        }
        logo
        institution
        hours
        locale
        id
      }
    }
    coursesEN: strapi {
      cursos(locale: "en", sort: "sort:desc") {
        name
        url
        year
        tecnologias {
          name
          logo
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
  const { items = 0 } = props;

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

  let { currentLanguaje } = useCurrentLanguaje();
  let { currentTheme } = useCurrentTheme();

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

  const [filterTech, setFilterTech] = useState(null);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    // Filter the courses with specific technology
    if (filterTech) {
      const filtered = courses.filter(course => {
        return course.tecnologias.some(tech => {
          return tech.name === filterTech;
        });
      });
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses(courses);
    }
  }, [filterTech, courses]);

  return (
    <section className={'section educations color-less ' + currentTheme}>
      <Title title={titleEducation} theme={currentTheme} />
      <div className="section-center-50">
        {degrees.map((degree, index) => {
          return <Degree key={degree.order} index={index} {...degree} />;
        })}
      </div>

      <div className="education-separador" />

      <Title title={titleCourses} theme={currentTheme} />

      <div className="section-center-50 content-filter-techs-courses">
        <FilterTech items={courses} setFilterTech={setFilterTech} />
      </div>

      <div className="section-center-50 cursos-container">
        {items > 0
          ? filteredCourses.map((course, index) => {
              if (index < items) {
                return <Course key={index} index={index} {...course} />;
              }
              return null;
            })
          : filteredCourses.map((course, index) => {
              return <Course key={index} index={index} {...course} />;
            })}
      </div>

      {items > 0 && (
        <div className="btnCenter btnMoreCursos">
          <Link to="/education" className={`btn ${currentTheme}`}>
            {titleBtnMore}
          </Link>
        </div>
      )}
    </section>
  );
};

export default Education;

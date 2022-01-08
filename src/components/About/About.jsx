import './About.scss';

import React from 'react';
import Title from '../../components/Title';
import IconoFa from '../../components/IconFa';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useCurrentTheme } from '../../hooks/useCurrentTheme';
import { useCurrentLanguaje } from '../../hooks/useCurrentLanguaje';
import SubTitle from '../Title/SubTitle';
import Footer from '../Footer';

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
    img: file(relativePath: { eq: "ninja-light.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
    imgDark: file(relativePath: { eq: "ninja-dark.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`;

const About = () => {
  const { aboutES, aboutEN, img, imgDark } = useStaticQuery(query);

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

          <div className='about-img'>
                <GatsbyImage
                  image={
                    currentTheme === 'dark'
                      ? imgDark.childImageSharp.gatsbyImageData
                      : img.childImageSharp.gatsbyImageData
                  }
                  alt="Leandro Arturi"
                  className="hero-img"
                />
          </div>

          <Title
            title={about.title}
            theme={currentTheme === 'dark' ? 'dark' : 'light'}
          />
          <p>{about.info}</p>

          <br />

          <SubTitle
            title={about.title_stack}
            theme={currentTheme === 'dark' ? 'dark' : 'light'}
          />
          <div className={`about-stack ${currentTheme}`}>
            <span><IconoFa name='FaReact'/>React</span>
            <span><IconoFa name='SiDjango'/>Django</span>
            <span><IconoFa name='FaPython'/>Python</span>
            <span><IconoFa name='FaLaravel'/>Laravel</span>
            <span><IconoFa name='SiPhp'/>Php</span>
            <span><IconoFa name='FaNodeJs'/>Node</span>
            <span><IconoFa name='SiGraphql'/>GraphQL</span>
            <span><IconoFa name='SiSass'/>Sass</span>
            <span><IconoFa name='SiBootstrap'/>Bootstrap</span>
            <span><IconoFa name='SiPostgresql'/>PostgreSQL</span>
            <span><IconoFa name='SiDocker'/>Docker</span>
            <span><IconoFa name='FaGithub'/>GitHub</span>
          </div>

          <div className='footerAbout'>
            <Footer />
          </div>

        </article>
      </div>
    </section>
  );
};

export default About;

import './Hero.scss';

import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import socialLinks from '../../constants/social_links';
import { HiTranslate } from 'react-icons/hi';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useCurrentTheme } from '../../hooks/useCurrentTheme';
import { useCurrentLanguaje } from '../../hooks/useCurrentLanguaje';

import { GlobalDispatchContext } from '../../context/GlobalContextProvider';

const query = graphql`
  {
    dataES: strapi {
      home(locale: "es-AR") {
        aboutLink
        text
        locale
      }
    }
    dataEN: strapi {
      home(locale: "en") {
        aboutLink
        text
        locale
      }
    }
    imgLight: file(relativePath: { eq: "hero.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
    imgDark: file(relativePath: { eq: "hero-dark.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
    imgBlue: file(relativePath: { eq: "hero-blue.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
    imgYellow: file(relativePath: { eq: "hero-yellow.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
    imgPink: file(relativePath: { eq: "hero-pink.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`;

const Hero = () => {
  const dispatch = useContext(GlobalDispatchContext);
  const { dataES, dataEN, imgLight, imgDark, imgBlue, imgYellow, imgPink } =
    useStaticQuery(query);

  let { currentLanguaje } = useCurrentLanguaje();
  let { currentTheme } = useCurrentTheme() || 'dark';

  const data = currentLanguaje === 'es-AR' ? dataES : dataEN;

  return (
    <header className={`hero ${currentTheme}`}>
      <section className="section-center hero-center">
        <article className={`hero-info ${currentTheme}`}>
          <button
            className={`link-button-toggle-lang`}
            type="button"
            onClick={() => {
              const selectedLang = currentLanguaje === 'es-AR' ? 'en' : 'es-AR';
              localStorage.setItem('locale', selectedLang);
              dispatch({ type: 'SET_LANGUAGE', payload: selectedLang });
            }}
          >
            <HiTranslate className={`nav-language-icon ${currentTheme}`} />
            <span className={`nav-language-text ${currentTheme}`}>
              {currentLanguaje === 'es-AR' ? 'English' : 'Español'}
            </span>
          </button>

          <div>
            <div className={`underline ${currentTheme}`}></div>
            <h1 className={`home-name-hello ${currentTheme}`}>
              LEANDRO ARTURI
            </h1>
            <h2 className={`home-profesion ${currentTheme}`}>
              {data.home.text}
            </h2>
            <Link
              to="/about"
              className={`btn btn-hero ${currentTheme}`}
              aria-label="About"
            >
              {data.home.aboutLink}
            </Link>
            <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={link.id}
                    aria-label={link.text}
                    className={`social-link ${currentTheme}`}
                  >
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </article>

        <GatsbyImage
          image={
            currentTheme === 'dark'
              ? imgDark.childImageSharp.gatsbyImageData
              : currentTheme === 'light'
              ? imgLight.childImageSharp.gatsbyImageData
              : currentTheme === 'blue'
              ? imgBlue.childImageSharp.gatsbyImageData
              : currentTheme === 'yellow'
              ? imgYellow.childImageSharp.gatsbyImageData
              : currentTheme === 'pink'
              ? imgPink.childImageSharp.gatsbyImageData
              : null
          }
          alt="Leandro Arturi"
          className="hero-img"
        />
      </section>
    </header>
  );
};

export default Hero;

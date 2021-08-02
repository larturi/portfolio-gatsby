import './Hero.scss';

import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import socialLinks from '../../constants/social_links';
import { GatsbyImage } from 'gatsby-plugin-image';

import { GlobalStateContext } from '../../context/GlobalContextProvider';

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
    img: file(relativePath: { eq: "hero.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`;

const Hero = () => {
  const state = useContext(GlobalStateContext);
  const { dataES, dataEN, img } = useStaticQuery(query);

  let currentLanguaje = state.language;
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('locale'))
      currentLanguaje = localStorage.getItem('locale');
  }

  const data = currentLanguaje === 'es-AR' ? dataES : dataEN;
  const theme = currentLanguaje === 'es-AR' ? 'dark' : 'light';

  return (
    <header className={`hero ${theme}`}>
      <section className="section-center hero-center">
        <article className={`hero-info ${theme}`}>
          <div>
            <div className={`underline ${theme}`}></div>
            <h1 className={`home-name-hello ${theme}`}>Leandro Arturi 👋</h1>
            <h2 className={`home-profesion ${theme}`}>{data.home.text}</h2>
            <Link
              to="/about"
              className={`btn btn-hero ${theme}`}
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
                    className={`social-link ${theme}`}
                  >
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </article>

        <GatsbyImage
          image={img.childImageSharp.gatsbyImageData}
          alt="Leandro Arturi"
          className="hero-img"
        />
      </section>
    </header>
  );
};

export default Hero;

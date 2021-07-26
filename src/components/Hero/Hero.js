import './Hero.scss';

import React, { useContext } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import socialLinks from '../../constants/social_links';
import heroImg from '../../images/hero.svg';

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
  }
`;

const Hero = () => {
  const state = useContext(GlobalStateContext);

  const { dataES, dataEN } = useStaticQuery(query);

  const data = state.selectedLang === 'es-AR' ? dataES : dataEN;

  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Leandro Arturi</h1>
            <h4>{data.home.text}</h4>
            <Link to="/contact" className="btn">
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
                    className="social-link"
                  >
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </article>

        <img src={heroImg} alt="portfolio" className="hero-img-svg" />
      </section>
    </header>
  );
};

export default Hero;

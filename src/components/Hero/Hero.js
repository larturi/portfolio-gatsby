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

  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1 className="home-name-hello">Leandro Arturi 👋</h1>
            <h2 className="home-profesion">{data.home.text}</h2>
            <Link to="/about" className="btn btn-hero">
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

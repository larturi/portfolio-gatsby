import './Hero.scss';

import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import socialLinks from '../../constants/social_links';
// import heroImg from '../../images/hero.svg';
import { StaticImage } from 'gatsby-plugin-image';
import Img from 'gatsby-image';

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
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const state = useContext(GlobalStateContext);
  const { dataES, dataEN, img } = useStaticQuery(query);
  const data = state.selectedLang === 'es-AR' ? dataES : dataEN;

  console.log(img);

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
        <Img
          fluid={img.childImageSharp.fluid}
          alt="Foto Leandro Arturi"
          className="hero-img"
        />
      </section>
    </header>
  );
};

export default Hero;

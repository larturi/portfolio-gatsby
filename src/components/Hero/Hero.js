import './Hero.scss';

import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import socialLinks from '../../constants/social_links';
import { StaticImage } from 'gatsby-plugin-image';

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm john</h1>
            <h4>freelance web and mobile UI/UX Designer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </article>

        <Img fluid={fluid} alt="Foto Leandro Arturi" className="hero-img" />
      </section>
    </header>
  );
};

export default Hero;

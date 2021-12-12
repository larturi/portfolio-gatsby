import './Footer.scss';

import React from 'react';
import { useCurrentTheme } from '../../hooks/useCurrentTheme';
import socialLinks from '../../constants/social_links';

const Footer = () => {
  let { currentTheme } = useCurrentTheme();

  return (
    <footer
      className={'footer ' + (currentTheme === 'dark' ? 'dark ' : 'light ')}
    >
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            return (
              <a
                href={link.url}
                key={link.id}
                className={`social-link ${currentTheme}`}
                aria-label={link.text}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            );
          })}
        </div>
       
        <p>
          Made with <span className="footer-author-name">❤️</span>{' '} with 
          <span className={`copyright-autor-name ${currentTheme}`}>
            <a href="https://es.reactjs.org/" target="_blank" rel="noopener noreferrer"> React</a>
          </span>, 
          <span className={`copyright-autor-name ${currentTheme}`}> 
            <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer"> Gatsby</a>
          </span>,
          <span className={`copyright-autor-name ${currentTheme}`}>
            <a href="https://strapi.io/" target="_blank" rel="noopener noreferrer"> Strapi</a>
          </span> & 
          <span className={`copyright-autor-name ${currentTheme}`}>
            <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer"> GraphQL</a>
          </span>
        </p>
        <br />
      </div>
    </footer>
  );
};

export default Footer;

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
          Made with <span className="footer-author-name">❤️</span>{' '} by Leandro Arturi with 
          <span className={`copyright-autor-name ${currentTheme}`}> React</span>, 
          <span className={`copyright-autor-name ${currentTheme}`}> Gatsby</span> & 
          <span className={`copyright-autor-name ${currentTheme}`}> Strapi</span></p>
      </div>
    </footer>
  );
};

export default Footer;

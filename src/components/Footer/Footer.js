import './Footer.scss';

import React, { useContext } from 'react';
import { GlobalStateContext } from '../../context/GlobalContextProvider';

import socialLinks from '../../constants/social_links';

const Footer = () => {
  const state = useContext(GlobalStateContext);

  let currentTheme = state.selectedTheme;

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('theme'))
      currentTheme = localStorage.getItem('theme');
  }

  return (
    <footer className="footer">
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
          <span className={`copyright-autor-name ${currentTheme}`}>
            Leandro Arturi{' '}
          </span>
          copyright&copy;{new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

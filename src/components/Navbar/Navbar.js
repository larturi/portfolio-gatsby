import './Navbar.scss';

import React, { useState, useContext } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { HiTranslate } from 'react-icons/hi';
import { graphql, useStaticQuery, Link } from 'gatsby';
import DarkModeToggle from 'react-dark-mode-toggle';

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from '../../context/GlobalContextProvider';

const query = graphql`
  {
    strapi {
      navs(locale: "all", sort: "order") {
        text
        order
        url
        locale
      }
    }
  }
`;

const Navbar = props => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const { toggleSidebar, path } = props;
  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);
  const dataAll = useStaticQuery(query);

  let currentLanguaje = state.language || 'es-AR';
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('locale'))
      currentLanguaje = localStorage.getItem('locale');
  }

  const data = dataAll.strapi.navs.filter(
    nav => nav.locale === currentLanguaje
  );

  if (typeof window !== 'undefined') {
    if (!localStorage.getItem('locale')) {
      localStorage.setItem('locale', 'es-AR');
    }
  }

  const theme = currentLanguaje === 'es-AR' ? 'dark' : 'light';

  const page = path !== '/' ? 'page' : '';

  console.log(isDarkMode);

  const toggleTheme = () => {
    const selectedTheme = isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    dispatch({ type: 'SET_THEME', payload: selectedTheme });
  };

  return (
    <nav className={`navbar ${page} ${theme}`}>
      <div className="nav-center">
        <div className="nav-header">
          <DarkModeToggle
            onChange={toggleTheme}
            checked={isDarkMode}
            className="dark-mode-toggle"
            size={60}
          />

          <button
            className={`link-button ${theme}`}
            type="button"
            onClick={() => {
              const selectedLang = currentLanguaje === 'es-AR' ? 'en' : 'es-AR';
              localStorage.setItem('locale', selectedLang);
              dispatch({ type: 'SET_LANGUAGE', payload: selectedLang });
            }}
          >
            <HiTranslate className={`nav-language-icon ${theme}`} />
            <span className={`nav-language-text ${theme}`}>
              {currentLanguaje === 'es-AR' ? 'English' : 'Español'}
            </span>
          </button>

          <button
            type="button"
            className={`toggle-btn ${theme}`}
            aria-label="menu"
            onClick={toggleSidebar}
          >
            <FaAlignRight />
            <span className="material-icons" aria-hidden="true">
              Menu
            </span>
          </button>
        </div>
        <ul className={`page-links nav-links ${theme}`}>
          {data.map(link => {
            return (
              <li key={link.order}>
                <Link
                  to={link.url}
                  activeClassName={`active ${theme}`}
                  className={path === link.url ? 'active' : ''}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import './Navbar.scss';

import React, { useState, useContext, useEffect } from 'react';
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
  const [isDarkMode, setIsDarkMode] = useState(null);

  const { toggleSidebar, path } = props;
  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);
  const dataAll = useStaticQuery(query);

  let currentLanguaje = state.selectedLang || 'es-AR';
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('locale'))
      currentLanguaje = localStorage.getItem('locale');
  }

  let currentTheme = state.selectedTheme || 'dark';
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('theme')) {
      currentTheme = localStorage.getItem('theme');
      if (isDarkMode === null) {
        setIsDarkMode(currentTheme === 'dark');
      }
    }
  }

  if (typeof window !== 'undefined') {
    if (!localStorage.getItem('locale')) {
      localStorage.setItem('locale', 'es-AR');
    }
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
    }
  }

  const data = dataAll.strapi.navs.filter(
    nav => nav.locale === currentLanguaje
  );

  const page = path !== '/' ? 'page' : '';

  useEffect(() => {
    const selectedTheme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', selectedTheme);
    dispatch({ type: 'SET_THEME', payload: selectedTheme });
  }, [isDarkMode, dispatch]);

  return (
    <nav className={`navbar ${page} ${currentTheme}`}>
      <div className="nav-center">
        <div className="nav-header">
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            className="dark-mode-toggle"
            size={60}
          />

          <button
            className={`link-button ${currentTheme}`}
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

          <button
            type="button"
            className={`toggle-btn ${currentTheme}`}
            aria-label="menu"
            onClick={toggleSidebar}
          >
            <FaAlignRight />
            <span className="material-icons" aria-hidden="true">
              Menu
            </span>
          </button>
        </div>
        <ul className={`page-links nav-links ${currentTheme}`}>
          {data.map(link => {
            return (
              <li key={link.order}>
                <Link
                  to={link.url}
                  activeClassName={`active ${currentTheme}`}
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

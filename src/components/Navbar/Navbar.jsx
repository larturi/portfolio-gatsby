import './Navbar.scss';

import React, { useState, useContext, useEffect } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { graphql, useStaticQuery, Link } from 'gatsby';
import SelectColorModal from './SelectColorModal';

import { LANG_DEFAULT, THEME_DEFAULT } from '../../constants/global';

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
  const isSSR = typeof window === 'undefined';

  const [colorTheme, setColorTheme] = useState(THEME_DEFAULT);
  const [transparentNavbar, setTransparentNavbar] = useState('');

  const { toggleSidebar, path, navbarTransparent } = props;

  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);
  const dataAll = useStaticQuery(query);

  let currentLanguaje = state.selectedLang || LANG_DEFAULT;
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('locale'))
      currentLanguaje = localStorage.getItem('locale');
  }

  let currentTheme = state.selectedTheme || THEME_DEFAULT;
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('theme')) {
      currentTheme = localStorage.getItem('theme');
    }
  }

  if (typeof window !== 'undefined') {
    if (!localStorage.getItem('locale')) {
      localStorage.setItem('locale', LANG_DEFAULT);
    }
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', THEME_DEFAULT);
    }
  }

  const data = dataAll.strapi.navs.filter(
    nav => nav.locale === currentLanguaje
  );

  const checkIsHome = () => {
    const isHome = path.length <= 1 ? 'isHome' : '';
    setTransparentNavbar(isHome);
  };

  useEffect(() => {
    checkIsHome();
  });

  useEffect(() => {
    const selectedTheme = localStorage.getItem('theme') || THEME_DEFAULT;
    setColorTheme(selectedTheme);

    localStorage.setItem('theme', selectedTheme);
    dispatch({ type: 'SET_THEME', payload: selectedTheme });

    // Add theme color to body
    document.body.className = currentTheme = '';
    document.body.className = currentTheme = selectedTheme;
  }, [colorTheme, dispatch]);

  return (
    <nav
      className={`navbar ${currentTheme} ${transparentNavbar} ${
        navbarTransparent && 'transparent'
      }`}
    >
      <div className="nav-center">
        <div className="nav-header">
          {!isSSR && (
            <React.Suspense fallback={<div />}>
              <SelectColorModal
                setColorTheme={setColorTheme}
                colorTheme={colorTheme}
              />
            </React.Suspense>
          )}

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
                  className={path === link.url ? `active ${currentTheme}` : ''}
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

import './Navbar.scss';

import React, { useContext } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { HiTranslate } from 'react-icons/hi';
import { graphql, useStaticQuery, Link } from 'gatsby';

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
  const { toggleSidebar, path } = props;
  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);
  const dataAll = useStaticQuery(query);

  let currentLanguaje = state.language || 'es-AR';
  if (localStorage.getItem('locale'))
    currentLanguaje = localStorage.getItem('locale');

  const data = dataAll.strapi.navs.filter(
    nav => nav.locale === currentLanguaje
  );

  if (!localStorage.getItem('locale')) {
    localStorage.setItem('locale', 'es-AR');
  }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button
            className="link-button"
            type="button"
            onClick={() => {
              const selectedLang = currentLanguaje === 'es-AR' ? 'en' : 'es-AR';
              localStorage.setItem('locale', selectedLang);
              dispatch({ type: 'SET_LANGUAGE', payload: selectedLang });
            }}
          >
            <HiTranslate className="nav-language-icon" />
            <span className="nav-language-text">
              {currentLanguaje === 'es-AR' ? 'English' : 'Español'}
            </span>
          </button>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
            <span className="material-icons" aria-hidden="true">
              Menu
            </span>
          </button>
        </div>
        <ul className="page-links nav-links">
          {data.map(link => {
            return (
              <li key={link.order}>
                <Link
                  to={link.url}
                  activeClassName="active"
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

import './Navbar.scss';

import React, { useContext } from 'react';
import logo from '../../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
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

const Navbar = () => {
  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);

  const dataAll = useStaticQuery(query);
  const data = dataAll.strapi.navs.filter(
    nav => nav.locale === state.selectedLang
  );

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button type="button" className="toggle-btn">
            <FaAlignRight />
          </button>
        </div>
        <ul className="page-links nav-links">
          {data.map(link => (
            <li key={link.order}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}

          <li key="lang">
            <button
              className="link-button"
              type="button"
              onClick={() => {
                dispatch({ type: 'TOOGLE_LANGUAGE' });
              }}
            >
              {state.selectedLang === 'es-AR' ? 'English' : 'Español'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

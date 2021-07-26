import './Navbar.scss';

import React from 'react';
import logo from '../../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Languaje from '../Languaje';

const query = graphql`
  {
    strapi {
      navs(locale: "en", sort: "order") {
        text
        order
        url
      }
    }
  }
`;

const Navbar = () => {
  const data = useStaticQuery(query);
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
          {data.strapi.navs.map(link => (
            <li key={link.order}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}

          <li>
            <Languaje />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

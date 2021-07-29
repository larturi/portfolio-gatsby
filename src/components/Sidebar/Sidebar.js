import './Sidebar.scss';

import React, { useContext } from 'react';
import socialLinks from '../../constants/social_links';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { FaTimes } from 'react-icons/fa';

import { GlobalStateContext } from '../../context/GlobalContextProvider';

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

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const state = useContext(GlobalStateContext);
  const dataAll = useStaticQuery(query);

  const links = dataAll.strapi.navs.filter(
    nav => nav.locale === state.selectedLang
  );

  return (
    <aside className={isOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <button
        className="close-btn"
        type="button"
        onClick={() => toggleSidebar()}
      >
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? 'sidebar-links' : null}>
          {links.map(link => {
            return (
              <li key={link.order}>
                <Link to={link.url} onClick={toggleSidebar}>
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul
          className={
            isOpen ? 'social-links social-links-sidebar sidebar-icons' : null
          }
        >
          {socialLinks.map(link => {
            return (
              <li key={link.id}>
                <a
                  href={link.url}
                  className="social-link"
                  aria-label={link.text}
                >
                  {link.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

import './Sidebar.scss';

import React from 'react';
import socialLinks from '../../constants/social_links';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { FaTimes } from 'react-icons/fa';
import { useCurrentTheme } from '../../hooks/useCurrentTheme';
import { useCurrentLanguaje } from '../../hooks/useCurrentLanguaje';

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
  let { currentTheme } = useCurrentTheme();
  let { currentLanguaje } = useCurrentLanguaje();

  const dataAll = useStaticQuery(query);

  const links = dataAll.strapi.navs.filter(
    nav => nav.locale === currentLanguaje
  );

  return (
    <aside
      className={
        isOpen
          ? `sidebar show-sidebar ${currentTheme}`
          : `sidebar ${currentTheme}`
      }
    >
      <button
        className={`close-btn ${currentTheme}`}
        type="button"
        onClick={() => toggleSidebar()}
      >
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? `sidebar-links ${currentTheme}` : null}>
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
                  className={`social-link ${currentTheme}`}
                  aria-label={link.text}
                  target="_blank"
                  rel="noopener noreferrer"
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

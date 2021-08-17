import React from 'react';
import { Link } from 'gatsby';
import { useCurrentTheme } from '../../hooks/useCurrentTheme';

import './NotFound.scss';

const NotFound = () => {
  let { currentTheme } = useCurrentTheme();

  return (
    <>
      <main
        className={`error-page ${currentTheme === 'dark' ? 'dark ' : 'light '}`}
      >
        <div className="error-container">
          <h1>Oops it's a 404 error</h1>
          <br />
          <Link
            to="/"
            className={`btn btn-hero ${
              currentTheme === 'dark' ? 'dark ' : 'light '
            }`}
          >
            Back home
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFound;

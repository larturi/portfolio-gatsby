import '../sass/pages.scss';

import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts/Layout/Layout';
// import Seo from '../components/Seo';

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>oops it's a dead end</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Error;

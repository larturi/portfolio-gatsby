import '../sass/pages.scss';
import './not-found.scss';

import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts/Layout/Layout';
import Seo from '../components/Seo';

const Error = () => {
  return (
    <Layout>
      <Seo title="Not Found" />

      <main className="error-page">
        <div className="error-container">
          <h1>Oops it's a 404 error</h1>
          <Link to="/" className="btn">
            Back home
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Error;

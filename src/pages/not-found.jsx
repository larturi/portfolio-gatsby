import '../sass/pages.scss';

import React from 'react';
import Layout from '../layouts/Layout/Layout';
import Seo from '../components/Seo';
import NotFound from '../components/NotFound';

const Error = props => {
  return (
    <Layout path={props.uri}>
      <Seo title="Leandro Arturi - 404" />
      <NotFound path={props.uri} />
    </Layout>
  );
};

export default Error;

import React from 'react';
import Seo from '../components/Seo';
import NotFound from '../components/NotFound';
import Layout from '../layouts/Layout/Layout';

const NotFoundPage = props => {
  return (
    <Layout path={props.uri}>
      <Seo title="Leandro Arturi - 404" />
      <NotFound path={props.uri} />
    </Layout>
  );
};

export default NotFoundPage;

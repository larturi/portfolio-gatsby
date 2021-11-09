import React from 'react';
import Layout from '../layouts/Layout/Layout';
import NotFound from '../components/NotFound';
import Seo from '../components/Seo';

const NotFoundPage = props => {
  return (
    <Layout path={props.uri}>
      <Seo title="Leandro Arturi - 404 Not Found" seoIndex={true} seoFollow={true} />
      <NotFound />
    </Layout>
  );
};

export default NotFoundPage;

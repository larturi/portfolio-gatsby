import React from 'react';
import Layout from '../layouts/Layout/Layout';
import Jobs from '../components/Jobs';
import Seo from '../components/Seo';

const JobsPage = () => {
  return (
    <Layout>
      <Seo title="Experience" />
      <Jobs />
    </Layout>
  );
};

export default JobsPage;

import React from 'react';
import Layout from '../layouts/Layout/Layout';
import About from '../components/About';
import Seo from '../components/Seo';

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="Leandro Arturi: About" />
      <About />
    </Layout>
  );
};

export default AboutPage;

import React from 'react';
import Layout from '../layouts/Layout/Layout';
import Hero from '../components/Hero';
import About from '../components/About';

import Seo from '../components/Seo';

const Home = props => {
  return (
    <Layout path={props.uri}>
      <Seo title="Leandro Arturi - Portfolio" seoIndex={true} seoFollow={true}  />
      <Hero />
      <About />
    </Layout>
  );
};

export default Home;

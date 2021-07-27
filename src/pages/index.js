import React from 'react';
import Layout from '../layouts/Layout/Layout';
import Hero from '../components/Hero';
import About from '../components/About';

import Seo from '../components/Seo';

const Home = () => {
  return (
    <Layout>
      <Seo title="Leandro Arturi: Home" />
      <Hero />
      <About />
    </Layout>
  );
};

export default Home;

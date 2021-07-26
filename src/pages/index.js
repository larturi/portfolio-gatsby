import React from 'react';
import Layout from '../layouts/Layout/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Jobs from '../components/Jobs';
import Seo from '../components/Seo';

const Home = () => {
  return (
    <Layout>
      <Seo title="Leandro Arturi: Home" />
      <Hero />
      <Services />
      <Jobs />
    </Layout>
  );
};

export default Home;

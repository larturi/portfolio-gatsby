import React from 'react';
import Layout from '../layouts/Layout/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';

import Seo from '../components/Seo';

const Home = () => {
  return (
    <Layout>
      <Seo title="Leandro Arturi: Inicio" />
      <Hero />
      <About />
      <Education backgroundWhite={true} items={5} />
    </Layout>
  );
};

export default Home;

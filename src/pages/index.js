import React from 'react';
import Layout from '../layouts/Layout/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Jobs from '../components/Jobs';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

import Seo from '../components/Seo';

const Home = () => {
  return (
    <Layout>
      <Seo title="Leandro Arturi: Inicio" />
      <Hero />
      <About />
      <Education backgroundWhite={true} items={5} />
      <Jobs items={5} />
      <Skills backgroundWhite={true} />
      <Projects items={10} />
    </Layout>
  );
};

export default Home;

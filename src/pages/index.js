import React from 'react';
import Layout from '../layouts/Layout/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Jobs from '../components/Jobs';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

import Seo from '../components/Seo';

const Home = () => {
  return (
    <Layout>
      <Seo title="Leandro Arturi: Home" />
      <Hero />
      <About />
      <Jobs />
      <Education />
      <Skills />
      <Projects />
    </Layout>
  );
};

export default Home;

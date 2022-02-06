import React from 'react';
import Layout from '../layouts/Layout/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
// import Education from '../components/Education';
// import Jobs from '../components/Jobs';
// import Skills from '../components/Skills';
// import Projects from '../components/Projects';

import Seo from '../components/Seo';

const Home = props => {
  return (
    <Layout path={props.uri}>
      <Seo title="Leandro Arturi - Portfolio" seoIndex={true} seoFollow={true}  />
      <Hero />
      <About />
      {/* <Skills backgroundWhite={true} /> */}
      {/* <Jobs items={5} /> */}
      {/* <Education backgroundWhite={true} items={5} /> */}
      {/* <Projects items={5} /> */}
    </Layout>
  );
};

export default Home;

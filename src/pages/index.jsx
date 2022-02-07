import React from 'react';
import Layout from '../layouts/Layout/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Seo from '../components/Seo';

const Home = props => {

  const isSSR = typeof window === 'undefined';

  const Jobs = React.lazy(() => import('../components/Jobs'));
  const Education = React.lazy(() => import('../components/Education'));
  const Projects = React.lazy(() => import('../components/Projects'));

  return (
    <Layout path={props.uri}>
      <Seo title="Leandro Arturi - Portfolio" seoIndex={true} seoFollow={true}  />
      <Hero />
      <About />

      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <Jobs items={5} />
        </React.Suspense>
      )}

      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <Education backgroundWhite={true} items={5} />
        </React.Suspense>
      )}

      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <Projects items={5} />
        </React.Suspense>
      )}
      
    </Layout>
  );
};

export default Home;

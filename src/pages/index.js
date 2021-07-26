import React from 'react';
// import { graphql } from 'gatsby';
import Layout from '../layouts/Layout/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
// import Jobs from "../components/Jobs"
// import Projects from "../components/Projects"
// import Blogs from "../components/Blogs"

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services />
    </Layout>
  );
};

export default Home;

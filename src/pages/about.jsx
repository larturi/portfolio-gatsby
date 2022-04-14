import React from 'react';
import Layout from '../layouts/Layout/Layout';
import About from '../components/About';
import Seo from '../components/Seo';

const AboutPage = props => {
  return (
    <Layout path={props.uri} footerHiden={true} navbarTransparent={true}>
      <Seo title="Leandro Arturi - About" />
      <About />
    </Layout>
  );
};

export default AboutPage;

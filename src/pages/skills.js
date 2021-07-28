import React from 'react';
import Layout from '../layouts/Layout/Layout';
import Skills from '../components/Skills';
import Seo from '../components/Seo';

const SkillsPage = props => {
  return (
    <Layout path={props.uri}>
      <Seo title="Leandro Arturi - Skills" />
      <Skills />
    </Layout>
  );
};

export default SkillsPage;

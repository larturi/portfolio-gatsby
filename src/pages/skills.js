import React from 'react';
import Layout from '../layouts/Layout/Layout';
import Skills from '../components/Skills';
import Seo from '../components/Seo';

const SkillsPage = () => {
  return (
    <Layout>
      <Seo title="Skills" />
      <Skills />
    </Layout>
  );
};

export default SkillsPage;

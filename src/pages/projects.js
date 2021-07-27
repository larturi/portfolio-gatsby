import React from 'react';
import Layout from '../layouts/Layout/Layout';
import Projects from '../components/Projects';
import Seo from '../components/Seo';

const ProjectsPage = () => {
  return (
    <Layout>
      <Seo title="Leandro Arturi: Portfolio" />
      <Projects />
    </Layout>
  );
};

export default ProjectsPage;

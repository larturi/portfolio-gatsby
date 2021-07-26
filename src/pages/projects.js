import React from 'react';
import Projects from '../components/Projects';
import Layout from '../layouts/Layout/Layout';
import Seo from '../components/Seo';

const ProjectsPage = () => {
  return (
    <Layout>
      <Seo title="Portfolio" />
      <Projects />
    </Layout>
  );
};

export default ProjectsPage;

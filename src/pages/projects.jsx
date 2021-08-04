import React from 'react';
import Layout from '../layouts/Layout/Layout';
import Projects from '../components/Projects';
import Seo from '../components/Seo';

const ProjectsPage = props => {
  return (
    <Layout path={props.uri}>
      <Seo title="Leandro Arturi - Proyectos" />
      <Projects />
    </Layout>
  );
};

export default ProjectsPage;

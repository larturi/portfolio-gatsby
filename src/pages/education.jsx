import React from 'react';
import Layout from '../layouts/Layout/Layout';
import Education from '../components/Education';
import Seo from '../components/Seo';

const EducationPage = props => {
  return (
    <Layout path={props.uri}>
      <Seo title="Leandro Arturi - Educación" />
      <Education />
    </Layout>
  );
};

export default EducationPage;

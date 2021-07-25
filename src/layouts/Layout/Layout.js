import React from 'react';
import Navbar from '../../components/Navbar';
// import Sidebar from './Sidebar';
// import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;

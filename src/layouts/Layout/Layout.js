import React from 'react';
import Navbar from '../../components/Navbar';
// import Sidebar from './Sidebar';
// import Footer from './Footer';

import GlobalContextProvider from '../../context/GlobalContextProvider';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalContextProvider>
        <Navbar />
        {children}
      </GlobalContextProvider>
    </>
  );
};

export default Layout;

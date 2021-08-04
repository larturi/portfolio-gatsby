import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

import GlobalContextProvider from '../../context/GlobalContextProvider';

const Layout = ({ children, path }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalContextProvider>
        <Navbar toggleSidebar={toggleSidebar} path={path} />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        {children}
        <Footer />
      </GlobalContextProvider>
    </>
  );
};

export default Layout;

import React from 'react';
import { Outlet } from 'react-router-dom';
// Adjusted to use relative paths
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';

function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Layout;

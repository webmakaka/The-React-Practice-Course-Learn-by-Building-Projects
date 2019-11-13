import React from 'react';
import Header from 'components/header_footer/Header';
import Footer from 'components/header_footer/Footer';

const Layout = props => {
  return (
    <div>
      <Header /> {props.children} <Footer />
    </div>
  );
};

export default Layout;

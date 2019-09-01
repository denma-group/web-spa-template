// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Navbar, { NavbarProvider } from 'layout/UI/Navbar';
import Footer from 'layout/UI/Footer';

const RoutesWrapper = props => {
  const { children, ...rest } = props;

  return (
    <NavbarProvider>
      <Navbar {...rest} />
      {children}
      <Footer />
    </NavbarProvider>
  );
};

RoutesWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default RoutesWrapper;

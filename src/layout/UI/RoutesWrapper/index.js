// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Navbar, { NavbarProvider } from 'layout/UI/Navbar';

const RoutesWrapper = props => {
  const { children, ...rest } = props;

  return (
    <NavbarProvider {...rest}>
      <Navbar />
      {children}
    </NavbarProvider>
  );
};

RoutesWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default RoutesWrapper;

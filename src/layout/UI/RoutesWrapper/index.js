// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import {
  Footer,
  Navbar,
  NavbarProvider,
} from 'layout/UI';

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

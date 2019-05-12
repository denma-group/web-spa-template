// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Navbar from 'layout/UI/Navbar';

const RoutesWrapper = props => {
  const { children } = props;

  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
};

RoutesWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default RoutesWrapper;

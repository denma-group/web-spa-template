// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Navbar from 'layout/UI/Navbar';

const PageWrapper = props => {
  const { children } = props;

  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageWrapper;

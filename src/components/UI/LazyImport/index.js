// Libraries
import React, { lazy } from 'react';
import PropTypes from 'prop-types';

/**
 * After the lazy imported component loads, delay the promise to increase smoothness.
 */
const LazyImport = props => {
  const {
    importedComponent,
    devDelay,
    delay
  } = props;

  const Component = lazy(() => Promise.all([
    importedComponent,
    new Promise(resolve => setTimeout(resolve, process.env.NODE_ENV === 'development' ? devDelay : delay))
  ]).then(([moduleExports]) => moduleExports));

  return <Component />;
};

LazyImport.propTypes = {
  importedComponent: PropTypes.instanceOf(Object).isRequired,
  devDelay: PropTypes.number,
  delay: PropTypes.number
};

LazyImport.defaultProps = {
  devDelay: 1500,
  delay: 1000
};

export default LazyImport;

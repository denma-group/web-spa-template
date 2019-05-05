// Libraries
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

// Components
import { Route } from 'react-router-dom';

const SuspendedRoute = props => {
  const {
    path,
    fallback,
    children,
    ...rest
  } = props;
  return (
    <Route
      path={path}
      render={() => (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      )}
      {...rest}
    />
  );
};

SuspendedRoute.propTypes = {
  path: PropTypes.string.isRequired,
  fallback: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};

export default SuspendedRoute;

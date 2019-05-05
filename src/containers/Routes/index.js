// Libraries
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';

// Components
import LazyImport from 'components/UI/LazyImport';
import Loader from 'components/UI/Loader';
import SuspendedRoute from 'components/UI/SuspendedRoute';

const Routes = props => {
  const { location } = props;

  /**
   * Any time the location (route) changes, an instant scroll to the top will execute.
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <SuspendedRoute exact path="/" fallback={<Loader />}><LazyImport importedComponent={import('containers/Homepage')} /></SuspendedRoute>
      <Route path="/hello-world" render={() => <div>Hello world!</div>} />
    </Switch>
  );
};

Routes.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired
};


export default withRouter(Routes);

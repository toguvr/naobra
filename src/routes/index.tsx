import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
// import Repository from '../pages/Repository';
// import SignIn from '../pages/SignIn';
// import SignUp from '../pages/SignUp';

export const routes = {
  // signin: '/signin',
  // signup: '/signup',
  dashboard: '/',
};

const Routes: React.FC = () => (
  <Switch>
    {/* <Route path={routes.signup} component={SignUp} /> */}
    <Route path={routes.dashboard} component={Dashboard} />
    {/* <Route path={routes.signin} component={SignIn} /> */}
  </Switch>
);

export default Routes;

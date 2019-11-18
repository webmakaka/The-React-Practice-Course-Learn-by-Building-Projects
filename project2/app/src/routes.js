import React from 'react';
import Layout from 'hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import Home from 'components/home';
import SignIn from 'components/signin';

import Dashboard from 'components/admin/Dashboard';

import PrivateRoute from 'components/auth_routes/privateRoutes';

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
        <Route exact component={SignIn} path="/sign_in" />
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;

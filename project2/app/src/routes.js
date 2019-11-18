import React from 'react';
import Layout from 'hoc/Layout';
import { Switch } from 'react-router-dom';

import PrivateRoute from 'components/auth_routes/privateRoutes';
import PublicRoute from 'components/auth_routes/publicRoutes';

import Home from 'components/home';
import SignIn from 'components/signin';

import Dashboard from 'components/admin/Dashboard';
import AdminMatches from 'components/admin/matches';

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
        <PrivateRoute
          {...props}
          path="/admin_matches"
          exact
          component={AdminMatches}
        />
        <PublicRoute
          {...props}
          restricted={true}
          path="/sign_in"
          exact
          component={SignIn}
        />
        <PublicRoute
          {...props}
          restricted={false}
          path="/"
          exact
          component={Home}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;

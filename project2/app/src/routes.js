import React from 'react';
import Layout from 'hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import Home from 'components/home';
import SignIn from 'components/signin';

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route exaxt component={SignIn} path="/sign_in" />
        <Route exaxt component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;

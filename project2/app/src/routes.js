import React from 'react';
import Layout from 'hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import Home from 'components/home';

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route exaxt component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;

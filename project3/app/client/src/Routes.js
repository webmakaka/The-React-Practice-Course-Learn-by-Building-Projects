import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from 'hoc/Layout';

import Home from 'components/home';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </Layout>
  );
};

export default Routes;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from 'hoc/Layout';

import Home from 'components/home';
import RegisterLogin from 'components/register_login';
import Register from 'components/register_login/Register';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/register_login" exact component={RegisterLogin}></Route>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </Layout>
  );
};

export default Routes;

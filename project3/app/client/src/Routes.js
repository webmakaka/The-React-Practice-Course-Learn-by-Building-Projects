import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from 'hoc/Layout';
import AuthenticationCheck from 'hoc/AuthenticationCheck';

import ManageSite from 'components/user/admin/ManageSite';

import Home from 'components/home';
import RegisterLogin from 'components/register_login';
import Register from 'components/register_login/Register';

import Shop from 'components/shop';

import UserDashBoard from 'components/user';
import UserCart from 'components/user/UserCart';
import UpdateProfile from 'components/user/UpdateProfile';

import AddProduct from 'components/user/admin/AddProduct';
import AddFile from 'components/user/admin/AddFile';
import ManageCategories from 'components/user/admin/ManageCategories';

import ProductPage from 'components/product';
import ResetUser from 'components/reset_user';
import ResetPass from 'components/reset_user/ResetPass';

import PageNotFound from 'components/utils/PageNotFound';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route
          path="/user/dashboard"
          exact
          component={AuthenticationCheck(UserDashBoard, true)}
        ></Route>
        <Route
          path="/user/cart"
          exact
          component={AuthenticationCheck(UserCart, true)}
        ></Route>
        <Route
          path="/user/user_profile"
          exact
          component={AuthenticationCheck(UpdateProfile, true)}
        ></Route>
        <Route
          path="/admin/add_product"
          exact
          component={AuthenticationCheck(AddProduct, true)}
        ></Route>
        <Route
          path="/admin/manage_categories"
          exact
          component={AuthenticationCheck(ManageCategories, true)}
        ></Route>
        <Route
          path="/admin/site_info"
          exact
          component={AuthenticationCheck(ManageSite, true)}
        ></Route>
        <Route
          path="/admin/add_file"
          exact
          component={AuthenticationCheck(AddFile, true)}
        ></Route>
        <Route
          path="/product_detail/:id"
          exact
          component={AuthenticationCheck(ProductPage, null)}
        ></Route>
        <Route
          path="/register"
          exact
          component={AuthenticationCheck(Register, false)}
        ></Route>

        <Route
          path="/reset_password/:token"
          exact
          component={AuthenticationCheck(ResetPass, false)}
        ></Route>
        <Route
          path="/reset_user"
          exact
          component={AuthenticationCheck(ResetUser, false)}
        ></Route>
        <Route
          path="/register_login"
          exact
          component={AuthenticationCheck(RegisterLogin, false)}
        ></Route>
        <Route
          path="/shop"
          exact
          component={AuthenticationCheck(Shop, null)}
        ></Route>
        <Route
          path="/"
          exact
          component={AuthenticationCheck(Home, null)}
        ></Route>
        <Route component={AuthenticationCheck(PageNotFound)}></Route>
      </Switch>
    </Layout>
  );
};

export default Routes;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({ user, component: Comp, ...rest }) => {
  return (
    <Route
      {...rest}
      component={props =>
        user ? <Comp {...props} user={user} /> : <Redirect to="/sign_in" />
      }
    />
  );
};

export default PrivateRoutes;

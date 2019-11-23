import React from 'react';
import MyButton from 'components/utils/MyButton';

import Login from 'components/register_login/Login';

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customers</h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
            <MyButton
              type="default"
              title="Create an account"
              linkTo="/register"
              addStyles={{
                margin: '10px 0 0 0'
              }}
            />
          </div>
          <div className="right">
            <h2>Registered customers</h2>
            <p>If you have account, please log in.</p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;

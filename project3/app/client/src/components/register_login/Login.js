import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormField from 'components/utils/forms/formField';

import { update } from 'components/utils/forms/formActions';

class Login extends Component {
  state = {
    formError: false,
    formSuccess: '',
    formData: {
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeHolder: 'Enter your email'
        },
        validation: {
          requied: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      password: {
        element: 'input',
        value: '',
        config: {
          name: 'password_input',
          type: 'password',
          placeHolder: 'Enter your password'
        },
        validation: {
          requied: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      }
    }
  };

  updateForm = element => {
    const newFormData = update(element, this.state.formData, 'login');
    this.setState({
      formError: false,
      formData: newFormData
    });
  };

  submitForm = () => {};

  render() {
    return (
      <div className="signin_wrapper">
        <form onSubmit={event => this.submitForm(event)}>
          <FormField
            id={'email'}
            formData={this.state.formData.email}
            change={element => this.updateForm(element)}
          />
          <FormField
            id={'password'}
            formData={this.state.formData.password}
            change={element => this.updateForm(element)}
          />
        </form>
      </div>
    );
  }
}

export default connect()(Login);

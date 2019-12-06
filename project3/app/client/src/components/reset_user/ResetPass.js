import React, { Component } from 'react';
import axios from 'axios';

import {
  update,
  generateData,
  isFormValid
} from 'components/utils/forms/formActions';

import FormField from 'components/utils/forms/formField';

import Dialog from '@material-ui/core/Dialog';

class ResetPass extends Component {
  state = {
    resetToken: '',
    formError: false,
    formErrorMessage: '',
    formSuccess: '',
    formData: {
      password: {
        element: 'input',
        value: '',
        config: {
          name: 'password_input',
          type: 'password',
          placeholder: 'Enter your password'
        },
        validation: {
          requied: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      confirmPassword: {
        element: 'input',
        value: '',
        config: {
          name: 'confirm_password_input',
          type: 'password',
          placeholder: 'Confirm your password'
        },
        validation: {
          requied: true,
          confirm: 'password'
        },
        valid: false,
        touched: false,
        validationMessage: ''
      }
    }
  };

  componentDidMount() {
    const resetToken = this.props.match.params.token;
    this.setState({
      resetToken
    });
  }

  updateForm = element => {
    const newFormData = update(element, this.state.formData, 'reset_pass');
    this.setState({
      formError: false,
      formData: newFormData
    });
  };

  submitForm = event => {
    event.preventDefault();

    let dataToSubmit = generateData(this.state.formData, 'reset_pass');

    let formIsValid = isFormValid(this.state.formData, 'reset_pass');

    if (formIsValid) {
      axios
        .post('/api/users/reset_password', {
          ...dataToSubmit,
          resetToken: this.state.resetToken
        })
        .then(response => {
          if (!response.data.success) {
            this.setState({
              formError: true,
              formErrorMessage: response.data.message
            });
          } else {
            this.setState({
              formError: false,
              formSuccess: true
            });

            setTimeout(() => {
              this.props.history.push('/register_login');
            }, 3000);
          }
        });
    } else {
      this.setState({
        formError: true
      });
    }
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={event => this.submitForm(event)}>
          <h2>Verify Password</h2>
          <div className="form_block_two">
            <div className="block">
              <FormField
                id={'password'}
                formData={this.state.formData.password}
                change={element => this.updateForm(element)}
              />
            </div>
            <div className="block">
              <FormField
                id={'confirmPassword'}
                formData={this.state.formData.confirmPassword}
                change={element => this.updateForm(element)}
              />
            </div>
          </div>
          <div>
            {this.state.formError ? (
              <div className="error_lable">{this.state.formErrorMessage}</div>
            ) : (
              ''
            )}
            <button onClick={event => this.submitForm(event)}>
              Reset password
            </button>
          </div>
        </form>

        <Dialog open={this.state.formSuccess}>
          <div className="dialog_alert">
            <div>Alright !</div>
            <div>Your password was reseted ... You will be redirected ....</div>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default ResetPass;

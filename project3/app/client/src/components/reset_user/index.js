import React, { Component } from 'react';
import axios from 'axios';

import {
  update,
  generateData,
  isFormValid
} from 'components/utils/forms/formActions';

import FormField from 'components/utils/forms/formField';

class ResetUser extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formData: {
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter your email'
        },
        validation: {
          requied: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      }
    }
  };

  updateForm = element => {
    const newFormData = update(element, this.state.formData, 'reset_email');
    this.setState({
      formError: false,
      formData: newFormData
    });
  };

  submitForm = event => {
    event.preventDefault();

    let dataToSubmit = generateData(this.state.formData, 'reset_email');

    let formIsValid = isFormValid(this.state.formData, 'reset_email');

    if (formIsValid) {
      axios.post('/api/users/reset_user', dataToSubmit).then(response => {
        if (response.data.success) {
          this.setState({
            formSuccess: true
          });
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
        <h1>Reset password</h1>
        <form onSubmit={event => this.submitForm(event)}>
          <FormField
            id={'email'}
            formData={this.state.formData.email}
            change={element => this.updateForm(element)}
          />
          {this.state.formSuccess ? (
            <div className="form_success">Done, check your email</div>
          ) : null}

          {this.state.formError ? (
            <div className="error_lable">Please check your data</div>
          ) : null}
          <button onClick={event => this.submitForm(event)}>
            Send email to reset password
          </button>
        </form>
      </div>
    );
  }
}

export default ResetUser;

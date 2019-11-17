import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import FormField from 'components/ui/FormField';

class Enroll extends Component {
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
          placeholder: 'Enter your email'
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessae: ''
      }
    }
  };

  submitForm() {}

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={event => this.submitForm(event)}>
            <div className="enroll_title">Enter your email</div>
            <div className="enroll_input">
              <FormField 
                id={'email'}
                formData={this.state.formData.email}
              />
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;

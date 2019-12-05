import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormField from 'components/utils/forms/formField';

import {
  update,
  generateData,
  isFormValid,
  populateFields
} from 'components/utils/forms/formActions';

import { updateUserData, clearUpdateUser } from 'actions/userActions';

class UpdatePersonalInfo extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formData: {
      name: {
        element: 'input',
        value: '',
        config: {
          name: 'name_input',
          type: 'text',
          placeholder: 'Enter your name'
        },
        validation: {
          requied: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      lastname: {
        element: 'input',
        value: '',
        config: {
          name: 'last_name_input',
          type: 'text',
          placeholder: 'Enter your Last Name'
        },
        validation: {
          requied: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
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

  componentDidMount() {
    const newFormData = populateFields(
      this.state.formData,
      this.props.user.userData
    );

    this.setState({
      formData: newFormData
    });
  }

  updateForm = element => {
    const newFormData = update(element, this.state.formData, 'update_user');
    this.setState({
      formError: false,
      formData: newFormData
    });
  };

  submitForm = event => {
    event.preventDefault();

    let dataToSubmit = generateData(this.state.formData, 'update_user');

    let formIsValid = isFormValid(this.state.formData, 'update_user');

    if (formIsValid) {
      this.props.dispatch(updateUserData(dataToSubmit)).then(() => {
        if (this.props.user.updateUser.success) {
          this.setState(
            {
              formSuccess: true
            },
            () => {
              setTimeout(() => {
                this.props.dispatch(updateUserData(clearUpdateUser()));
                this.setState({
                  formSuccess: false
                });
              }, 2000);
            }
          );
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
      <div>
        <form onSubmit={event => this.submitForm(event)}>
          <h2>Personal Information</h2>
          <div className="form_block_two">
            <div className="block">
              <FormField
                id={'name'}
                formData={this.state.formData.name}
                change={element => this.updateForm(element)}
              />
            </div>
            <div className="block">
              <FormField
                id={'lastname'}
                formData={this.state.formData.lastname}
                change={element => this.updateForm(element)}
              />
            </div>
          </div>
          <div>
            <FormField
              id={'email'}
              formData={this.state.formData.email}
              change={element => this.updateForm(element)}
            />
          </div>

          <div>
            {this.state.formSuccess ? (
              <div className="form_success">Success</div>
            ) : null}
            {this.state.formError ? (
              <div className="error_lable">Please check your data</div>
            ) : null}
            <button onClick={event => this.submitForm(event)}>
              Update personal info
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(UpdatePersonalInfo);

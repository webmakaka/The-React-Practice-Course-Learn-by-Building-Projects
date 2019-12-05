import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormField from 'components/utils/forms/formField';

import {
  update,
  generateData,
  isFormValid,
  populateFields
} from 'components/utils/forms/formActions';

import { getSiteData, updateSiteData } from 'actions/siteActions';

class UpdateSiteInfo extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formData: {
      address: {
        element: 'input',
        value: '',
        config: {
          label: 'Address',
          name: 'address_input',
          type: 'text',
          placeholder: 'Enter the site address'
        },
        validation: {
          requied: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showLabel: true
      },
      hours: {
        element: 'input',
        value: '',
        config: {
          label: 'Working hours',
          name: 'hours_input',
          type: 'text',
          placeholder: 'Enter the site working hours'
        },
        validation: {
          requied: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showLabel: true
      },
      phone: {
        element: 'input',
        value: '',
        config: {
          label: 'Phone number',
          name: 'phone_input',
          type: 'text',
          placeholder: 'Enter the phone number'
        },
        validation: {
          requied: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showLabel: true
      },
      email: {
        element: 'input',
        value: '',
        config: {
          label: 'Shop email',
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
        validationMessage: '',
        showLabel: true
      }
    }
  };

  componentDidMount() {
    this.props.dispatch(getSiteData()).then(() => {
      const newFormData = populateFields(
        this.state.formData,
        this.props.site.siteData[0]
      );
      this.setState({
        formData: newFormData
      });
    });
  }

  updateForm = element => {
    const newFormData = update(element, this.state.formData, 'site_info');
    this.setState({
      formError: false,
      formData: newFormData
    });
  };

  submitForm = event => {
    event.preventDefault();

    let dataToSubmit = generateData(this.state.formData, 'site_info');

    let formIsValid = isFormValid(this.state.formData, 'site_info');

    if (formIsValid) {
      this.props.dispatch(updateSiteData(dataToSubmit)).then(() => {
        this.setState(
          {
            formSuccess: true
          },
          () => {
            setTimeout(() => {
              this.setState({
                formSuccess: false
              });
            }, 2000);
          }
        );
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
          <h2>Website Information</h2>

          <FormField
            id={'address'}
            formData={this.state.formData.address}
            change={element => this.updateForm(element)}
          />

          <FormField
            id={'hours'}
            formData={this.state.formData.hours}
            change={element => this.updateForm(element)}
          />

          <FormField
            id={'phone'}
            formData={this.state.formData.phone}
            change={element => this.updateForm(element)}
          />

          <FormField
            id={'email'}
            formData={this.state.formData.email}
            change={element => this.updateForm(element)}
          />

          <div>
            {this.state.formSuccess ? (
              <div className="form_success">Success</div>
            ) : null}
            {this.state.formError ? (
              <div className="error_lable">Please check your data</div>
            ) : null}
            <button onClick={event => this.submitForm(event)}>Update</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    site: state.site
  };
};

export default connect(mapStateToProps)(UpdateSiteInfo);

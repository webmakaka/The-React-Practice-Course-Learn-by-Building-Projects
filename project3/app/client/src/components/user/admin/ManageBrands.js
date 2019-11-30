import React, { Component } from 'react';

import {
  update,
  generateData,
  isFormValid,
  resetFields
} from 'components/utils/forms/formActions';

import { connect } from 'react-redux';

import { getBrands, addBrand } from 'actions/productsActions';

import FormField from 'components/utils/forms/formField';

class ManageBrands extends Component {
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
          placeholder: 'Enter the brand'
        },
        validation: {
          requied: true
        },
        valid: false,
        touched: false,
        validationMessage: '',
        showLabel: false
      }
    }
  };

  componentDidMount() {
    this.props.dispatch(getBrands());
  }

  showCategoryItems = () =>
    this.props.products.brands
      ? this.props.products.brands.map((item, i) => (
          <div className="category_item" key={item._id}>
            {item.name}
          </div>
        ))
      : null;

  updateForm = element => {
    const newFormData = update(element, this.state.formData, 'brands');
    this.setState({
      formError: false,
      formData: newFormData
    });
  };

  submitForm = event => {
    event.preventDefault();

    let dataToSubmit = generateData(this.state.formData, 'brands');
    let formIsValid = isFormValid(this.state.formData, 'brands');
    let existingBrands = this.props.products.brands;

    if (formIsValid) {
      this.props
        .dispatch(addBrand(dataToSubmit, existingBrands))
        .then(response => {
          if (response.payload.success) {
            this.resetFieldsHandler();
          } else {
            this.setState({
              formError: true
            });
          }
        });
    } else {
      this.setState({
        formError: true
      });
    }
  };

  resetFieldsHandler = () => {
    const newFormData = resetFields(this.state.formData, 'brands');

    this.setState({
      formData: newFormData,
      formSuccess: true
    });
  };

  render() {
    return (
      <div className="admin_category_wrapper">
        <h1>Brands</h1>
        <div className="admin_two_column">
          <div className="left">
            <div className="brands_container">{this.showCategoryItems()}</div>
          </div>
          <div className="right">
            <form onSubmit={event => this.submitForm(event)}>
              <FormField
                id={'name'}
                formData={this.state.formData.name}
                change={element => this.updateForm(element)}
              />

              {this.state.formError ? (
                <div className="error_lable">Please check your data</div>
              ) : null}
              <button onClick={event => this.submitForm(event)}>
                Add brand
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ManageBrands);

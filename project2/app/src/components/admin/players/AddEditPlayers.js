import React, { Component } from 'react';
import AdminLayout from 'hoc/AdminLayout';

import FormField from 'components/ui/FormField';
import FileUploader from 'components/ui/FileUploader';
import { validate } from 'components/ui/misc';

import { firebasePlayers, firebaseDB } from 'myFirebase';

class AddEditPlayers extends Component {
  state = {
    playerId: '',
    formType: '',
    formError: false,
    formSuccess: '',
    defaultImg: '',
    formData: {
      name: {
        element: 'input',
        value: '',
        config: {
          label: 'Player Name',
          name: 'name_input',
          type: 'text'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showLabel: true
      },
      lastName: {
        element: 'input',
        value: '',
        config: {
          label: 'Player Last Name',
          name: 'last_name_input',
          type: 'text'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showLabel: true
      },
      number: {
        element: 'input',
        value: '',
        config: {
          label: 'Player Number',
          name: 'number_input',
          type: 'text'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showLabel: true
      },
      position: {
        element: 'select',
        value: '',
        config: {
          label: 'Select a positon',
          name: 'select_position',
          type: 'select',
          options: [
            { key: 'Keeper', value: 'Keeper' },
            { key: 'Defence', value: 'Defence' },
            { key: 'Midfield', value: 'Midfield' },
            { key: 'Striker', value: 'Striker' }
          ]
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showLabel: true
      },
      image: {
        element: 'image',
        value: '',
        validation: {
          required: true
        },
        valid: true
      }
    }
  };

  componentDidMount() {
    const playerId = this.props.match.params.id;

    if (!playerId) {
      this.setState({
        formType: 'Add player'
      });
    } else {
    }
  }

  updateForm(element) {
    const newFormData = { ...this.state.formData };
    const newElement = { ...newFormData[element.id] };

    newElement.value = element.event.target.value;

    let validData = validate(newElement);

    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormData[element.id] = newElement;

    this.setState({
      formError: false,
      formData: newFormData
    });
  }

  submitForm(event) {
    event.preventDefault();
    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
      formIsValid = this.state.formData[key].valid && formIsValid;
    }

    if (formIsValid) {
      // TODO: submit form
    } else {
      this.setState({
        formError: true
      });
    }
  }

  resetImage = () => {};

  storeFileName = () => {};

  render() {
    return (
      <AdminLayout>
        <div className="editplayers_dialog_wrapper">
          <h2>{this.state.formType}</h2>

          <div>
            <form onSubmit={event => this.submitForm(event)}>
              <FileUploader
                dir="players"
                tag={'Player image'}
                defaultImg={this.state.defaultImg}
                defaultImgName={this.state.formData.image.value}
                resetImage={() => this.resetImage()}
                fileName={fileName => this.storeFileName(fileName)}
              />

              <FormField
                id={'name'}
                formData={this.state.formData.name}
                change={element => this.updateForm(element)}
              />

              <FormField
                id={'lastName'}
                formData={this.state.formData.lastName}
                change={element => this.updateForm(element)}
              />

              <FormField
                id={'number'}
                formData={this.state.formData.number}
                change={element => this.updateForm(element)}
              />

              <FormField
                id={'position'}
                formData={this.state.formData.position}
                change={element => this.updateForm(element)}
              />

              <div className="success_label">{this.state.formSuccess}</div>
              {this.state.formError ? (
                <div className="error_label">SomeThing is wrong</div>
              ) : (
                ''
              )}

              <div className="admin_submit">
                <button onClick={event => this.submitForm(event)}>
                  {this.state.formType}
                </button>
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default AddEditPlayers;

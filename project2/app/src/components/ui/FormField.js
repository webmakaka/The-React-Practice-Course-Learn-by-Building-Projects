import React from 'react';

const FormField = ({ formData, id, change }) => {
  const showError = () => {
    let errorMessage = (
      <div className="error_label">
        {formData.validation && !formData.valid
          ? formData.validationMessage
          : null}
      </div>
    );

    return errorMessage;
  };

  const renderTemplate = () => {
    let formTemplate = null;

    switch (formData.element) {
      case 'input':
        formTemplate = (
          <div>
            {formData.showLabel ? (
              <div className="label_inputs">{formData.config.label}</div>
            ) : null}
            <input
              {...formData.config}
              value={formData.value}
              onChange={event => change({ event, id })}
            />

            {showError()}
          </div>
        );
        break;
      case 'select':
        formTemplate = (
          <div>
            {formData.showLabel ? (
              <div className="label_inputs">{formData.config.label}</div>
            ) : null}
            <select
              value={formData.value}
              onChange={event => change({ event, id })}
            >
              <option value="">Select one</option>
              {formData.config.options.map(item => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
            {showError()}
          </div>
        );
        break;
      default:
        formTemplate = null;
    }

    return formTemplate;
  };

  return <div>{renderTemplate()}</div>;
};

export default FormField;

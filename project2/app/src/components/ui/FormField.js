import React from 'react';

const FormField = ({ formData, id }) => {
  const renderTemplate = () => {
    let formTemplate = null;

    switch (formData.element) {
      case 'input':
        formTemplate = (
          <div>
            <input {...formData.config} value={formData.value} />
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

import React from 'react';

const FormField = ({ formData, change, id }) => {
  const renderTemplate = () => {
    let formTemplate = null;

    switch (formData.element) {
      case 'input':
        formTemplate = (
          <div className="formBlock">
            <input
              {...formData.config}
              valu={formData.value}
              onBlur={event => change({ event, id, blur: true })}
              onChange={event => change({ event, id })}
            ></input>
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

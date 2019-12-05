import React, { Component } from 'react';
// import PaypalExpressBtn from 'react-paypal-express-checkout';
import { PayPalButton } from 'react-paypal-button-v2';

class PayPal extends Component {
  render() {
    const onSuccess = (details, data) => {
      this.props.onSuccess(details);
    };

    const onCancel = data => {
      console.log('onCancel');
      console.log(JSON.stringify(data));
    };

    const onError = err => {
      console.log('onError');
      console.log(JSON.stringify(err));
    };

    return (
      <div>
        <PayPalButton
          amount={this.props.toPay}
          options={{ clientId: 'sb', currency: 'USD' }}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
          style={{
            size: 'large',
            color: 'blue',
            shape: 'rect',
            label: 'checkout'
          }}
        />
      </div>
    );
  }
}

export default PayPal;

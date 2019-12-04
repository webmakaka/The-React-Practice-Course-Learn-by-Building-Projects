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

    let env = 'sandbox';
    let currency = 'USD';
    let total = this.props.toPay;

    // const client = {
    //   sandbox:
    //     'AaGVlvPoCROqGH4hiNMO_JIGC6sqq6fGoNo94CqWXAK5tBFPIUV41IrguS7QfHpVdn9b_LrOaF13UtHA',
    //   production: ''
    // };

    return (
      <div>
        {/* <PaypalExpressBtn
          env={env}
          client={client}
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
          style={{
            size: 'large',
            color: 'blue',
            shape: 'rect',
            label: 'checkout'
          }}
        /> */}

        <PayPalButton
          amount={total}
          options={{ clientId: 'sb', currency: 'USD' }}
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
          // onSuccess={(details, data) => {
          //   alert('Transaction completed by ' + details.payer.name.given_name);
          // }}

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

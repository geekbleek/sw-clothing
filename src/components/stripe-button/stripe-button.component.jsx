import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_0HMHBGLH7M1wuEsskZFNc8U400p74Wd5Xj';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful!');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='Southern Wind Appearal'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;
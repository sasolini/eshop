import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51H9WP9B9mjj8BRnk6Rz25aYKxooFQaPB691SOFPQgWegonXUwH92qvFylC4kszcoFeAPekjMmzGhuEa3FW26gqqk00EEvkCKNO';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='eShop Demo Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/Cuz.svg'
      description={`Your total is £${price}`}
      amount={priceForStripe}
      currency='GBP'
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

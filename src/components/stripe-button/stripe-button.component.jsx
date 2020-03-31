import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_lOZLwjVjkqm2GuCcZT0O1hzL001M0xFc7a";

  const onToken = token => {
    console.log(token);
    alert('Success!');
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Crwn Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

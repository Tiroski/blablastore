import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HMz5LCgHIZZwIP4gM8grLgeiTovrCPPYknVtqmnujB5FECf7uJ70nvZs0lAmBTiYlNazjcZOF83i3qKJiNIrJwz006KlM95PS";

  const onToken = (token) => {
    console.log(token);
    alert("Payment seccesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="tStore"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/PF9.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

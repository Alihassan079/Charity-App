import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { makePayment } from '../redux/features/payment';
import { useDispatch } from 'react-redux';

function CreditCardForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlePaymentSuccess = (token) => {
    console.log(token);
    const paymentData = {
      amount: 1000, // Replace with the actual payment amount
      token: token, // Pass the token received from Stripe
    };
    dispatch(makePayment({paymentData,navigate, toast}));
  };
  
  return (
    <StripeCheckout
      token={handlePaymentSuccess}
      stripeKey="pk_test_51NJVxGCZnB9IqVzpO0rzFp378c6Gmdn7YtYkqdaOrcDTZgHTEhV296jQAOZxnxctRraUErbzxRpduBMrI9LU9AJL00SxkxNr59"
      name="Charity"
      description="Purchase Description"
      amount={10000} // Amount in cents
      currency="USD"
      billingAddress={true}
      zipCode={true}
      panelLabel="Donate Now"
      locale="auto"
    >
      <button className="submit-button" type="button">
        Donate Now
      </button>
    </StripeCheckout>
  );
}

export default CreditCardForm;



// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// function CreditCardForm() {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet
//       return;
//     }

//     // Use the stripe and elements objects to handle the form submission
//   };

//   return (
//     <form className="credit-card-form" onSubmit={handleSubmit}>
//       <div className="card-element-container">
//         <CardElement options={{ /* Stripe Element options */ }} />
//       </div>
//       <button className="submit-button" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// }

// export default CreditCardForm;

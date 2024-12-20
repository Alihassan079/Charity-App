import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { makePayment } from '../redux/features/payment';
import { toast } from 'react-toastify';

export const DonateNow = () => {
    // const [showCheckout, setShowCheckout] = useState(false);
    const [donationAmount, setDonationAmount] = useState(100); // State variable to store the selected amount
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const handleDonateNowClick = () => {
    //   if (!showCheckout) {
    //     setShowCheckout(true);
    //   } else {
    //     console.log('donationAmount', donationAmount);
    //     // Code to handle payment success
    //   }
    // };
    
  
    const handlePaymentSuccess = (token) => {
      console.log(token);

      const paymentData = {
        amount: donationAmount, // Use the selected amount
        token: token,
      };
      dispatch(makePayment({ paymentData, navigate, toast }));
    };
  const onchangeHandler = (amount) => {
    setDonationAmount(amount);
  }
  return (
    <div class="donate" data-parallax="scroll" data-image-src="donate.jpg">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="donate-content">
            <div class="section-header">
              <p>Donate Now</p>
              <h2>Let's donate to needy people for better lives</h2>
            </div>
            <div class="donate-text">
              <p>
                Every day, countless individuals and families struggle to meet their basic needs for food, shelter, and healthcare. We believe that together, we can make a difference in their lives. Your donation, no matter the amount, will help provide crucial resources and services to those who need it most. With your help, we can create a better world for everyone.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="donate-form">
            <form>
              {/* Existing form fields */}
              {/* <div class="control-group">
                <input type="text" class="form-control" placeholder="Name" required="required" />
              </div>
              <div class="control-group">
                <input type="email" class="form-control" placeholder="Email" required="required" />
              </div> */}
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-custom active">
                  <input
                    type="radio"
                    name="options"
                    value="100"
                    checked={donationAmount === 50}
                    onClick={() => onchangeHandler(50)}
                  /> $50
                </label>
                <label class="btn btn-custom">
                  <input
                    type="radio"
                    name="options"
                    value="500"
                    checked={donationAmount === 100}
                    onClick={() => onchangeHandler(100)}
                  /> $100
                </label>
                <label class="btn btn-custom">
                  <input
                    type="radio"
                    name="options"
                    value="1000"
                    checked={donationAmount === 500}
                    onClick={() => onchangeHandler(500)}
                  /> $500
                </label>
                <label class="btn btn-custom">
                  <input
                    type="radio"
                    name="options"
                    value="5000"
                    checked={donationAmount === 1000}
                    onClick={() => onchangeHandler(1000)}
                  /> $1000
                </label>
              </div>
              {/* Render the checkout button when "Donate Now" is clicked */}
              {/* {!showCheckout ? (
                <div>
                  <button class="btn btn-custom" type="button" onClick={handleDonateNowClick}>
                    Donate Now
                  </button>
                </div>
              ) : ( */}
                <StripeCheckout
                  token={handlePaymentSuccess}
                  stripeKey="pk_test_51NJVxGCZnB9IqVzpO0rzFp378c6Gmdn7YtYkqdaOrcDTZgHTEhV296jQAOZxnxctRraUErbzxRpduBMrI9LU9AJL00SxkxNr59"
                  name="Charity"
                  description="Donation"
                  amount={donationAmount*100} // Multiply the selected amount by 100 to convert it to cents
                  currency="USD"
                  billingAddress={true}
                  zipCode={true}
                  panelLabel="Donate Now"
                  locale="auto"
                >
                  <button className="btn btn-custom" type="button">
                    Donate Now
                  </button>
                </StripeCheckout>
              {/* )} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>  )
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CreditCardForm from './stripe/Stripe';



const stripePromise = loadStripe('pk_test_51NJVxGCZnB9IqVzpO0rzFp378c6Gmdn7YtYkqdaOrcDTZgHTEhV296jQAOZxnxctRraUErbzxRpduBMrI9LU9AJL00SxkxNr59');
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      {/* <StripeProvider apiKey="pk_test_51NJVxGCZnB9IqVzpO0rzFp378c6Gmdn7YtYkqdaOrcDTZgHTEhV296jQAOZxnxctRraUErbzxRpduBMrI9LU9AJL00SxkxNr59"> */}
      {/* <div> */}
        <App />
        {/* <Elements stripe={stripePromise}> */}
          {/* Your application components */}
          {/* <CreditCardForm/> */}
        {/* </Elements> */}
      {/* </div> */}
      {/* </StripeProvider> */}
    </Router>
  </Provider>
  // </React.StrictMode>
);

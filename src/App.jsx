import React, { createContext, useEffect, useReducer } from 'react';

import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';


import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Donate } from './components/Donate';
import { Events } from './components/Events';
import { Blog } from './components/Blog';
// import { Logout } from './components/Logout';
import Header from './partials/Header';
import { initialState, reducer } from "../src/reducer/usereducer";
import EmailVerify from './components/EmailVerify';
import ForgetPassword from './pages/ForgetPassword';
import AddDonor from './pages/AddDonor';
import EditDonor from './pages/EditDonor';
import DonorDashboard from './pages/DonorDashboard';
import SingleDonor from './pages/SingleDonor';
import AddDonation from './pages/AddDonation';
import EditDonation from './pages/EditDonation';
import DonationDashboard from './pages/DonationDashboard';
import SingleDonation from './pages/SingleDonation';
import AddBene from './pages/AddBene';
import EditBene from './pages/EditBene';
import BeneDashboard from './pages/BeneDashboard';
import SingleBene from './pages/SingleBene';
import AddVol from './pages/AddVol';
import EditVol from './pages/EditVol';
import SingleVol from './pages/SingleVol';
import NotFound from './pages/NotFound';
import PrivateRoute from './PrivateRoute';
import VolDashboard from './pages/VolDashboard';
import { Provider, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import { setUser } from './redux/features/authSlice';
import AdminPanel from "./pages/AdminPanel"
import UserRequests from './pages/UserReq';
import ResetPassword from './pages/Resetpassword';


const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/donate" element={<Donate />} />
      <Route exact path="/events" element={<Events />} />
      <Route exact path="/blog" element={<Blog />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/adminpanel" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      {/* <Route exact path="/logout" element={<Logout />} /> */}
      <Route exact path="/user/:id/verify/:token" element={<EmailVerify />} />

      <Route
        path="/add_donor"
        element={
          <PrivateRoute>
            <AddDonor />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit_donor/:id"
        element={
          <PrivateRoute>
            <EditDonor />
          </PrivateRoute>
        }
      />
      <Route
        path="/all_donors"
        element={
          <PrivateRoute>
            <DonorDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/donor/:id"
        element={
          <PrivateRoute>
            <SingleDonor />
          </PrivateRoute>
        }
      />

      <Route
        path="/add_donation"
        element={
          <PrivateRoute>
            <AddDonation />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit_donation/:id"
        element={
          <PrivateRoute>
            <EditDonation />
          </PrivateRoute>
        }
      />
      <Route
        path="/all_donations"
        element={
          <PrivateRoute>
            <DonationDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/donation/:id"
        element={
          <PrivateRoute>
            <SingleDonation />
          </PrivateRoute>
        }
      />

      <Route
        path="/add_bene"
        element={
          <PrivateRoute>
            <AddBene />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit_bene/:id"
        element={
          <PrivateRoute>
            <EditBene />
          </PrivateRoute>
        }
      />
      <Route
        path="/all_benes"
        element={
          <PrivateRoute>
            <BeneDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/bene/:id"
        element={
          <PrivateRoute>
            <SingleBene />
          </PrivateRoute>
        }
      />

      <Route
        path="/add_vol"
        element={
          <PrivateRoute>
            <AddVol />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit_vol/:id"
        element={
          <PrivateRoute>
            <EditVol />
          </PrivateRoute>
        }
      />
      <Route
        path="/all_vols"
        element={
          <PrivateRoute>
            <VolDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/volunteer/:id"
        element={
          <PrivateRoute>
            <SingleVol />
          </PrivateRoute>
        }
      />
      <Route
        path="/user-requests"
        element={
          <PrivateRoute>
            <UserRequests />
          </PrivateRoute>
        }
      />
      

      <Route path="*" element={<NotFound />} />
    </Routes>

  )
}

function App() {


  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  
  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (

    <>
        {/* <Header/> */}
        <div className="App">
        <ToastContainer />

        {/* <Header /> */}
        <Routing />
        </div>
    </>
  );
}

export default App;

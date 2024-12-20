import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../redux/features/authSlice';

function ResetPassword() {
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
  
    // const loading = useSelector((state) => state.resetPassword.loading);
    // const error = useSelector((state) => state.resetPassword.error);
    // const successMessage = useSelector((state) => state.resetPassword.successMessage);
  
    const handleResetPassword = async (e) => {
      e.preventDefault();
  
      const token = new URLSearchParams(window.location.search).get('token');
      const email = new URLSearchParams(window.location.search).get('email');
      console.log(token, email);
      if (!token) {
        // Handle invalid token
        return;
      }
      const payload ={
        token: token, password:password, confirmPassword:confirmPassword, email:email 
      }
      dispatch(resetPassword({data:payload, navigate: navigate}));
    };
  
    // Reset the state when component unmounts
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Page content */}
      <main className="grow">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1 mb-4">Reset Password</h1>
                <p className="text-xl text-gray-400">
                  Enter your new password and confirm it.
                </p>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleResetPassword}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-300 text-sm font-medium mb-1"
                        htmlFor="password"
                      >
                        New Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="form-input w-full text-gray-300"
                        placeholder="Enter your new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-300 text-sm font-medium mb-1"
                        htmlFor="confirmPassword"
                      >
                        Confirm Password
                      </label>
                      <input
                        id="confirmPassword"
                        type="password"
                        className="form-input w-full text-gray-300"
                        placeholder="Confirm your new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full btn-auth">
                        Reset Password
                      </button>
                    </div>
                  </div>
                </form>
                {/* {message && (
                  <div className="text-gray-400 text-center mt-6">
                    {message}
                  </div>
                )} */}
                <div className="text-gray-400 text-center mt-6">
                  <Link
                    to="/signin"
                    className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  >
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ResetPassword;

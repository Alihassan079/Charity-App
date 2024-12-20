import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => ({ ...state.auth }));
  console.log('user avai',user);
  return user ? children : navigate('/home');
};

export default PrivateRoute;
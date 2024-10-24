// src/components/ProtectedRoute.jsx

import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../authentication/AuthContext'; 

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext); 

  
  if (!user) {
    return <Navigate to="/pop-up" />;
  }

  return children; 
};

export default ProtectedRoute;

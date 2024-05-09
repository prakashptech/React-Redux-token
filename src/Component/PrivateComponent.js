import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem('token') !== null;

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/" replace />}
    />
  );
};

export default PrivateRoute;

// components/PrivateRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const PrivateRoute = ({ component: Component, role,...rest }) => {
  const { user, role: currentRole } = useContext(AuthContext);

  if (!user || currentRole!== role) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PrivateRoute;
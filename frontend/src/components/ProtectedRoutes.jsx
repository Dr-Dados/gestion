// RoleProtectedRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const RoleProtectedRoute = ({ roles, element, ...rest }) => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!roles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return <Route {...rest} element={element} />;
};

export default RoleProtectedRoute;

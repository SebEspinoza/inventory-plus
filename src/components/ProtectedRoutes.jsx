import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// Auth Component
import { useAuth } from "../context/AuthContext";

const ProtectedRoutes = ({ children }) => {
  const { authToken } = useAuth();

  if (!authToken) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
};

export default ProtectedRoutes;

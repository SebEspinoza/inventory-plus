import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useSelector } from "react-redux";

const RequireAuth = ({ allowedRoles }) => {
  const state = useSelector((state) => state.UserReducer);
  const { auth } = useAuth();
  const location = useLocation();

  return state.user.type === allowedRoles ? (
    <Outlet />
  ) : state.user.userName ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;

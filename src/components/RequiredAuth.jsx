import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = ({ allowedRoles }) => {
  const state = useSelector((state) => state.UserReducer);
  const location = useLocation();

  if (state.user !== null && state.user.type !== null) {
    return state.user.type === allowedRoles ? (
      <Outlet />
    ) : state.user.userName ? (
      <Navigate to="/unauthorized" state={{ from: location }} replace />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequireAuth;

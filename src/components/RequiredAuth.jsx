import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = ({ allowedRoles }) => {
  const state = useSelector((state) => state.UserReducer);
  const location = useLocation();

  if (state.user !== null && allowedRoles.includes(state.user.type)) {
    return <Outlet />;
  } else if (state.user !== null) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequireAuth;

import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className="flex gap-4 justify-center items-center">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={location.pathname}></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.nodes,
};

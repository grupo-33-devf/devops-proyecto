import { Outlet, Navigate } from "react-router";

import { useAuth } from "../context/authContext";

const PrivateRouter = () => {
  const { token } = useAuth();

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;

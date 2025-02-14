import { Outlet, Navigate } from "react-router";

import { useAuth } from "../context/authContext";

const PrivateRouter = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;

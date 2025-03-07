import { useAuthContext } from "@/contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const authContext = useAuthContext();

  if (!authContext || !authContext.user) {
    return <Navigate to="/login" replace />;
  }

  const { user } = authContext;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

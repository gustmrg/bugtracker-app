import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ProtectedRoute } from "@/components/protected-route";
import { NotFound } from "@/pages/NotFound";
import { Login } from "@/pages/auth/Login";
import { Register } from "@/pages/auth/Register";
import { Dashboard } from "@/pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [{ path: "/dashboard", element: <Dashboard /> }],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

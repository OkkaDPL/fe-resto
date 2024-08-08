import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Login, Register } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/register", element: <Register /> },
]);

export default router;

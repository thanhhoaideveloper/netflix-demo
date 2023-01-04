import MinimalLayout from "../Layouts/MinimalLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const MinimalRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
  ],
};

export default MinimalRoutes;

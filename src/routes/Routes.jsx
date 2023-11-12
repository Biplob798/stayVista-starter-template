import { createBrowserRouter } from "react-router-dom";

import SignUp from "../pages/signUp/SignUp";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/error/Error";
import Main from "../layOut/Main";
import RoomDetails from "../pages/roomDetails/RoomDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:id",
        element: <RoomDetails></RoomDetails>,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);

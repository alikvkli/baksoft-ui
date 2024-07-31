import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import HomePage from "@/pages/home";
import Login from "@/pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "giris-yap",
        element: <Login />,
      },
    ],
  },
]);

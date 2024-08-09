import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import HomePage from "@/pages/home";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";
import CaptionDetail from "@/pages/caption-detail";

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
        element: <LoginPage />,
      },
      {
        path: "kayit-ol",
        element: <RegisterPage />,
      },
      {
        path: "baslik/:caption_slug",
        element: <CaptionDetail />
      }
    ],
  },
]);

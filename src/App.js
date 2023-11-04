import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/Register";
import OTP from "./components/OTP";
import LoginForm from "./components/LoginForm";
import CSVREADER from "./components/CSVREADER";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <div>about</div>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/OTP",
    element: <OTP />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/csv",
    element: <CSVREADER />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/Register";
import OTP from "./components/OTP";
import LoginForm from "./components/LoginForm";
import CSVREADER from "./components/CSVREADER";
import PredictionList from "./components/PredictionList";
import ResultsDetailPage from "./components/ResultsDetailPage";
import Previous from "./components/Previous";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/khanapara",
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
  {
    path: "/predictionList",
    element: <PredictionList />,
  },
  {
    path: "/results/:id",
    element: <ResultsDetailPage />,
  },
  {
    path: "/Previous",
    element: <Previous />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

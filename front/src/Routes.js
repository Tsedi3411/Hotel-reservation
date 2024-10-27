import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Room from "./Pages/Room";
import Hotel from "./Pages/Hotel";
import Branch from "./Pages/Branch";
import Reservation from "./Pages/Reservation";
import Setting from "./Pages/Setting";
import Login from "./Pages/Login";
import CreateReservation from "./Pages/CreateReservation";
import MyReservations from "./Pages/MyReservations";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/create-reservation/:roomId",
        element: <CreateReservation />,
      },
      {
        path: "/room",
        element: <Room />,
      },
      {
        path: "/my-reservation",
        element: <MyReservations />,
      },
      {
        path: "/branch",
        element: <Branch />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "/hotel",
        element: <Hotel />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
    ],
  },
]);

export default routes;

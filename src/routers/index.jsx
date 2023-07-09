import { createBrowserRouter } from "react-router-dom";
import D3JS from "../pages/D3Js/D3JS";
import ChartJs2 from "../pages/ChartJs2/ChartJs2";

import App from "../App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "chartjs2",
        element: <ChartJs2 />,
      },
      {
        path: "D3js",
        element: <D3JS />,
      },
    ],
  },
]);
export default router;
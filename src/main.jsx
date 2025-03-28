import "./index.css";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Blog, Extras, Home, Portfolio, Template } from "./pages";

const router = createBrowserRouter([
  {
    element: <Template />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/portfolio/:category",
        element: <Portfolio />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about/:section",
        element: <About />,
      },
      {
        path: "/extras/:section",
        element: <Extras />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

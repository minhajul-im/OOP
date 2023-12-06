import { createBrowserRouter, Outlet } from "react-router-dom";

import { Browse, Home } from "../pages/index";

const App = () => {
  return <Outlet />;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
]);

export default appRouter;

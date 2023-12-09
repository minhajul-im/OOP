import { Provider } from "react-redux";
import { createBrowserRouter, Outlet } from "react-router-dom";

import store from "./store";
import { Browse, Home } from "../pages/index";
import Header from "../components/header&footer/Header";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
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

import { RouterProvider } from "react-router-dom";
import "./index.css";
import appRouter from "./app/App";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);

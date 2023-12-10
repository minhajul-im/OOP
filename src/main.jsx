import "./index.css";
import appRouter from "./app/App";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "@fortawesome/fontawesome-svg-core/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);

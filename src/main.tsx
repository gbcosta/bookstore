import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "@pages/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);

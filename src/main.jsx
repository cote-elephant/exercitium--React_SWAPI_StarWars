import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./utils/AppRouter.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={AppRouter} />
  </StrictMode>
);
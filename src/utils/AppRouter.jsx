import { createBrowserRouter } from "react-router-dom";
import { App } from "../App.jsx";
import { Movies } from "../pages/Movies.jsx";
import { Characters } from "../pages/Characters.jsx";
import { Planets } from "../pages/Planets.jsx";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "movies", element: <Movies /> },
      { path: "characters", element: <Characters /> },
      { path: "planets", element: <Planets /> },
    ],
  },
]);

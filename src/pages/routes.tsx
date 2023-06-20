import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import GameDetailPage from "./GameDetailPage";
import HomePage from "./HomePage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailPage /> },
    ],
  },
]);

export default router;

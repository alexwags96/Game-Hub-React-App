import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./GameDetailPage";
import HomePage from "./HomePage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;

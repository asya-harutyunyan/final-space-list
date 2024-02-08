import { useRoutes } from "react-router-dom";
import EpisodesList from "./pages/HomePage";
import DetailsPage from "./pages/EpisodeDetailsPage/[id]";

const RoutesPage = () => {
  return useRoutes([
    {
      path: "/",
      element: <EpisodesList />,
    },
    {
      path: "/details/:id",
      element: <DetailsPage />,
    },
    {
      path: "*",
      element: (
        <h1 style={{ fontSize: "40px", color: "red", marginTop: "15px" }}>
          Page Not Found
        </h1>
      ),
    },
  ]);
};

export default RoutesPage;

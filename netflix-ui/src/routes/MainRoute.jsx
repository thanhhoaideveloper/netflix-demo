import MainLayout from "../Layouts/MainLayout";
import Movies from "../pages/Movies";
import Home from "../pages/NetflixHome";
import Player from "../pages/Player";
import TVShow from "../pages/TVShow";
import UserLike from "../pages/UserLike";

const MainRoute = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "player",
      element: <Player />,
    },
    {
      path: "movies",
      element: <Movies />,
    },
    {
      path: "tv",
      element: <TVShow />,
    },
    {
      path: "mylist",
      element: <UserLike />,
    },
  ],
};

export default MainRoute;

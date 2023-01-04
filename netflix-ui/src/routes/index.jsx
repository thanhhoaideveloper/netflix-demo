import { useRoutes } from "react-router-dom";

// import in project
import MainRoute from "./MainRoute";
import MinimalRoute from "./MinimalRoutes";

export default function ThemeRoutes() {
  return useRoutes([MainRoute, MinimalRoute]);
}

import { CRDetails } from "./pages/CRDetails";
import { Home } from "./pages/Home";
import { ProjectDetails } from "./pages/ProjectDetails";
import { Projectspace } from "./pages/Projectspace";

export const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/projectspace",
    component: <Projectspace />,
  },
  {
    path: "projectspace/project/:id",
    component: <ProjectDetails />,
  },
  {
    path: "projectspace/project/:id/cr/:cr_id",
    component: <CRDetails />,
  },
];

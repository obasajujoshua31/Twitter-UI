import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AuthComponent from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

export default {
  default: [
    {
      path: "/",
      exact: true,
      component: Home,
    },
    {
      path: "/auth",
      component: AuthComponent,
    },
  ],
  protected: [
    {
      path: "/dashboard/:id",
      component: Dashboard,
    },
    {
      path: "/dashboard",
      component: Dashboard,
    },
  ],
  notfound: [
    {
      path: "*",
      component: NotFound,
    },
  ],
};

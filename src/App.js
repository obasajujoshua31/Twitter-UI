import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./store";
import routes from "./routes";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const loadRoutes = routes.default.map(route => (
    <Route
      path={route.path}
      component={route.component}
      exact={route.exact}
      key={route.path}
    />
  ));

  const securedRoutes = routes.protected.map(
    ({ exact, path, component }, index) => (
      <ProtectedRoute
        component={component}
        exact={exact}
        path={path}
        key={index}
      />
    )
  );
  const notFoundRoutes = routes.notfound.map(
    ({ exact, path, component }, index) => (
      <ProtectedRoute
        component={component}
        exact={exact}
        path={path}
        key={index}
      />
    )
  );
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {loadRoutes}
          {securedRoutes}
          {notFoundRoutes}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

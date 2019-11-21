import React from "react";
import { Redirect, Route } from "react-router-dom";
import auth from "../utils/auth";

export default function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        auth.verifyUser() ? <Component {...props} /> : <Redirect to="/" />
      }
    ></Route>
  );
}

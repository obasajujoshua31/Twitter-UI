import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import auth from "../../utils/auth";

import "./index.scss";

class AuthComponent extends Component {
  componentDidMount() {
    const { at, ats, bt } = queryString.parse(this.props.location.search);

    if (!at || !ats || !bt) {
      return this.props.history.push("/");
    }
    auth.saveUserToken(at, ats, bt);
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div className="home-wrapper">
        <div className="auth">Authenticating your twitter account ...</div>
      </div>
    );
  }
}

export default withRouter(AuthComponent);

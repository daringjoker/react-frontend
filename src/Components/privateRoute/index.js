import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import * as routes from "../../Constants/routes";

import withAuthPrivilege from "../../HOC/auth";
class PrivateRoute extends Component {
  render() {
    let { isLoggedIn } = this.props;
    return isLoggedIn ? <Route {...this.props} /> : <Redirect to={routes.LOGIN} />;
  }
}

export default withAuthPrivilege(PrivateRoute);

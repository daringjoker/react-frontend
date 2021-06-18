import React, { Component } from "react";
import withAuthPrivilege from "../../HOC/auth";
import * as routes from "../../Constants/routes";
import { Route, Redirect } from "react-router-dom";
class PrivateRoute extends Component {
  render() {
    let { isLoggedIn } = this.props;
    return isLoggedIn ? <Route {...this.props} /> : <Redirect to={routes.LOGIN} />;
  }
}

export default withAuthPrivilege(PrivateRoute);

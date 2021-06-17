import { Component } from "react";
import { connect } from "react-redux";
import history from "../Utilities/history";
import { bindActionCreators } from "redux";
import * as routes from "../Constants/routes";
import * as authService from "../Services/auth";
import * as userService from "../Services/user";
import * as tokenService from "../Services/token";
import { setLoggingIn, setLoggedIn, setAuthUser } from "../Actions/Data/auth";

const withAuthPrivilege = (InnerComponent) => {
  class AuthPrivleged extends Component {
    login = async (loginData) => {
      try {
        let { setLoggingIn, setLoggedIn, setAuthUser } = this.props;
        setLoggingIn(true);
        let { username, password, remember } = loginData;
        let responseData = await authService.login({
          username,
          password,
          remember,
        });
        if (responseData.status === "success") {
          let { transactionToken, persistentToken } = responseData.data;
          tokenService.saveTokens(transactionToken, persistentToken);
          let userData = await userService.fetchSelf();
          setAuthUser(userData.data);
          setLoggingIn(false);
          setLoggedIn(true);
          history.push(routes.HOME);
        }
      } catch {
        alert("Sorry cannot login at the moment");
      }
    };
    logout = async () => {
      let { setLoggedIn, setAuthUser } = this.props;
      setLoggedIn(false);
      setAuthUser({});
      tokenService.clear();
      history.push(routes.LOGIN);
    };
    register = async (username, email, password) => {};
    render() {
      return <InnerComponent {...this.props} login={this.login} logout={this.logout} register={this.register} />;
    }
  }
  const mapStateToProps = (state) => {
    let { isLoggedIn, isLoggingIn, user } = state.data.auth;
    return {
      isLoggedIn,
      isLoggingIn,
      authenticatedUser: user,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setAuthUser, setLoggingIn, setLoggedIn }, dispatch);
  };
  return connect(mapStateToProps, mapDispatchToProps)(AuthPrivleged);
};

export default withAuthPrivilege;

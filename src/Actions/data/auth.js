export const SET_LOGGING_IN = "SET_LOGGING_IN";
export const SET_LOGGED_IN = "SET_LOGGED_IN";
export const SET_AUTHENTICATED_USER = "SET_AUTHENTICATED_USER";

export function setLoggingIn(loggingIn) {
  return {
    type: SET_LOGGING_IN,
    data: loggingIn,
  };
}

export function setLoggedIn(loggedIn) {
  return {
    type: SET_LOGGED_IN,
    data: loggedIn,
  };
}

export function setAuthUser(authenticatedUser) {
  return {
    type: SET_AUTHENTICATED_USER,
    data: authenticatedUser,
  };
}

import {
  SET_LOGGING_IN,
  SET_IS_LOGGED_IN,
  SET_AUTHENTICATED_USER,
} from "actions/data/auth";

const INITIAL_STATE = {
  isLoggedIn: false,
  isLoggingIn: false,
  user: {},
};

export default function reduce(authState = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOGGING_IN:
      return {
        ...authState,
        isLoggingIn: action.data,
      };

    case SET_IS_LOGGED_IN:
      return {
        ...authState,
        isLoggedIn: action.data,
      };

    case SET_AUTHENTICATED_USER:
      return {
        ...authState,
        user: action.data,
      };

    default:
      return authState;
  }
}

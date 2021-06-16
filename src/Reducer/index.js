import dataReducer from "./Data";
import uiReducer from "./Ui";

import { combineReducers } from "redux";

export default combineReducers({
  data: dataReducer,
  ui: uiReducer,
});

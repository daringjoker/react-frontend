import { createStore } from "redux";
import comboReducer from "./Reducer";
import { persistStore } from "redux-persist";

const store = createStore(comboReducer);

const persistor = persistStore(store);

export default store;
export { persistor };

import { PersistGate } from "redux-persist/integration/react";
import React, { StrictMode } from "react";
import { persistor } from "./store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store from "./store";
import "./index.css";
import App from "./App";
import init from "./initialize";
init();
ReactDOM.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </PersistGate>,
  document.getElementById("root")
);

import App from "./App";
import store from "./store";
import "./static/css/style.css";
import init from "./initialize";
import ReactDOM from "react-dom";
import { persistor } from "./store";
import { Provider } from "react-redux";
import React, { StrictMode } from "react";
import { PersistGate } from "redux-persist/integration/react";

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

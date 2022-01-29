import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


// redux stuff
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer, { initailStore } from "./reducer/reducer";

// Redux Store
const store = createStore(reducer, initailStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

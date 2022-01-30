import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


// redux stuff
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer, { initailStore } from "./reducer/reducer";

// Redux Store

const store = createStore(reducer, initailStore , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs";
import { Provider } from "react-redux";
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import store from "redux/rootSlice";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

dayjs.locale("ja");

ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <App />
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

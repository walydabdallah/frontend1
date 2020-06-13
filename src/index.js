import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.9.0";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import axios from "axios"
import BillGen from "./views/BillGen/BillGen"
var hist = createBrowserHistory();
axios.defaults.headers.common['Authorization']="Basic dGVzdEBnbWFpbC5jb20gdGVzdDEyMzp0ZXN0MTIzNDV0c3QxMjM=";
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/generate-pdf" component={BillGen} />
      <Route path="/" component={LoginPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

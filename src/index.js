import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.9.0";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import axios from "axios"
import BillGen from "./views/BillGen/BillGen"
import { CookiesProvider } from 'react-cookie';

var hist = createBrowserHistory();
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    window.localStorage.getItem('token')
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)
axios.defaults.headers.common['Authorization'] = window.localStorage.getItem('token');
ReactDOM.render(
  <CookiesProvider>
    <Router history={hist}>
      <Switch>
        <PrivateRoute path="/landing-page" component={LandingPage} />
        <PrivateRoute path="/generate-pdf" component={BillGen} />
        <Route path="/" component={LoginPage} />
      </Switch>
    </Router>
  </CookiesProvider>
  ,
  document.getElementById("root")
);

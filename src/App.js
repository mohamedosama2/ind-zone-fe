import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "jquery/dist/jquery.js";
import "popper.js/dist/popper.js";
import Login from "./components/login";
import Email from "./components/changepass'email'";
import Codepass from "./components/changepasscode";
import Signup from "./components/signup";
import Change from "./components/changepass";
import codeofsignup from "./components/codeofsignup";
import Dashboard from "./components/dashboard";
import Verify from "./components/verifycode";
import Employees from "./components/employees";
import Home from "./components/home";
import Logout from "./components/Logout/Logout";
import Accountant from "./components/accountant";
import Secretary from "./components/secretary";
import Treasury from "./components/treasury";
import Technician from "./components/technician";
import "./App.css";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "./store/index";

const App = (props) => {
  useEffect(() => {
    props.onTry();
  }, [props.onTry]);

  let routes = (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/email" component={Email} />
      <Route path="/changepasscode/:email" component={Codepass} />
      <Route path="/verify/:email" component={Verify} />
      <Route path="/changepass" component={Change} />
      <Route path="/codeofsignup" component={codeofsignup} />
      <Route path="/logout" component={Logout} />
      <Redirect to="/" />
    </Switch>
  );
  if (props.role === "admin") {
    routes = (
      <Switch>
        <Route path="/admin/dashboard" component={Dashboard} />
        <Route path="/admin/empoyees" component={Employees} />
        <Route path="/verify/:email" component={Verify} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/admin/dashboard" />
      </Switch>
    );
  } else if (props.role === "secretary") {
    routes = (
      <Switch>
        <Route path="/verify/:email" component={Verify} />
        <Route path="/secretary" component={Secretary} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/secretary" />
      </Switch>
    );
  } else if (props.role === "technician") {
    routes = (
      <Switch>
        <Route path="/verify/:email" component={Verify} />
        <Route path="/technician" component={Technician} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/technician" />
      </Switch>
    );
  } else if (props.role === "treasury") {
    routes = (
      <Switch>
        <Route path="/verify/:email" component={Verify} />
        <Route path="/treasury" component={Treasury} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/treasury" />
      </Switch>
    );
  } else if (props.role === "accountant") {
    routes = (
      <Switch>
        <Route path="/verify/:email" component={Verify} />
        <Route path="/accountant" component={Accountant} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/accountant" />
      </Switch>
    );
  } else if (props.isAuth) {
    routes = (
      <Switch>
        <Route path="/user" component={Home} />
        <Route path="/verify/:email" component={Verify} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/user" />
      </Switch>
    );
  }
  return (
    <>
      <main>{routes} </main>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
    role: state.auth.role,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTry: () => dispatch(actions.authCheckState()),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

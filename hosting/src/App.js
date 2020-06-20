import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/login.component";
import SignUp from "./components/signup.component";

// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import UserProvider from "./providers/UserProvider"

const Application = () => {
  const user = null;
  return (
    user ?
      <Home />
      : <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand visa" to={"/sign-in"}>VISA</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/home" component={Home} />
              </Switch>
            </div>
          </div>
        </div></Router>
  );
};

const App = () => {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;

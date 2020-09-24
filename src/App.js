import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Registration from "./components/Registration";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <div className="app-container">
      <Router>
        {isAuth ? (
          <Switch>
            <Route path="/" component={Layout} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/registration" component={Registration} />
            <Redirect to="/auth" />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;

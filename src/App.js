import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Auth from "./components/Auth/Auth";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Registration from "./components/Registration/Registration";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  console.log(isAuth);
  return (
    <div className='app-container'>
      <Router>
        {isAuth ? (
          <Switch>
            <Route path='/' component={Layout} />
          </Switch>
        ) : (
          <Switch>
            <Route path='/auth' component={Auth} />
            <Route path='/registration' component={Registration} />
            <Redirect to='/auth' />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;

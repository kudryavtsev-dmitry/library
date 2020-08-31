import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import "./Layout.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { routeArr } from "../../constants/RoutsArray";

const Layout = () => {
  const auth = useSelector((state) => state.auth);

  const getRoutes = (roleId) => {
    const filteredRoutes = routeArr.filter((route) => route.roles.includes(roleId))
    return filteredRoutes
  }

  return (
    <div className="Layout-container">
      <Sidebar />
      <div className="Layout-wrapper">
        <div className="Layout-header-wrapper">
          <Header />
        </div>
        <div className="Layout-body-wrapper">
          <Switch>
            {getRoutes(auth.role).map((route) => (
              <Route path={route.path} component={route.component} />
            ))}
            <Redirect to="/books" />
          </Switch>
        </div>
      </div>
    </div>
  );
};
export default Layout;

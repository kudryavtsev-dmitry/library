import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import "./Layout.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { routeArr } from "../../constants/RoutsArray";

const Layout = () => {
  const auth = useSelector((state) => state.auth);

  const getRoutes = (roleId) => {
    return routeArr.filter((route) => route.roles.includes(roleId));
  };

  return (
    <div className="Layout-container">
      <Sidebar />
      <div className="Layout-wrapper">
        <div className="Layout-header-wrapper">
          <Header />
        </div>
        <div className="Layout-body-wrapper">
          <Switch>
            {getRoutes(auth.role).map((route, index) => (
              <Route
                key={index}
                path={route.path}
                component={route.component}
              />
            ))}
            <Redirect to="/books" />
          </Switch>
        </div>
      </div>
    </div>
  );
};
export default Layout;

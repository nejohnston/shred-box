// // Client entry point, imports all client code
import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "../imports/ui/containers/App";
import Login from "../imports/ui/components/Login";
import NotFound from '../imports/ui/components/NotFound';
import PrivateRoute from '../imports/ui/components/PrivateRoute/';


import "./main.css";



Meteor._debug = (function(super_meteor_debug) {
  return function(error, info) {
    if (info && _.has(info, "msg"))
      super_meteor_debug("Streamy message is allowed!", info);
    else super_meteor_debug(error, info);
  };
})(Meteor._debug);


const renderRoutes = () => (
  <Router>
    <div>
      <Switch>
        <PrivateRoute exact path="/" component={App} currentUserId={Meteor.userId()}/>
        <Route exact path="/login" component={Login} 
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Router>
);

Meteor.startup(() =>
  ReactDOM.render(renderRoutes(), document.getElementById("root"))
);

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from 'react-router'

import PrivateRoute from '../../ui/components/PrivateRoute';
import App from "../../ui/containers/App";
import Login from "../../ui/components/Login";
import NotFound from "../../ui/components/NotFound/";


export const renderRoutes = () => (
  <Router>
    <div>
      <Switch>
        <PrivateRoute exact path="/" component={App} authenticated = {Meteor.userId()}/>
        <Route exact path="/login" component={Login} authenticated = {Meteor.userId()}/>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Router>
);

// export default withRouter(renderRoutes);
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "../../ui/containers/App";
import Login from "../../ui/components/AccountsWrapper";
import NotFound from "../../ui/components/NotFound/";

export const renderRoutes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Router>
);

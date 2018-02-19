import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import App from "../../ui/containers/App";
import Login from "../../ui/components/AccountsWrapper";
import NotFound from "../../ui/components/NotFound/";
import EndGame from "../../ui/containers/EndGame";

export const renderRoutes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/endgame" component={EndGame} />
        <Redirect from="/" to="/endgame" />;
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Router>
);

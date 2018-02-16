// import { FlowRouter } from 'meteor/kadira:flow-router';
// import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// // Import needed templates
// import '../../ui/layouts/body/body.js';
// import '../../ui/pages/home/home.js';
// import '../../ui/pages/not-found/not-found.js';

// // Set up all routes in the app
// FlowRouter.route('/', {
//   name: 'App.home',
//   action() {
//     BlazeLayout.render('App_body', { main: 'App_home' });
//   },
// });

// FlowRouter.notFound = {
//   action() {
//     BlazeLayout.render('App_body', { main: 'App_notFound' });
//   },
// };

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import createBrowserHistory from "history/createBrowserHistory";

import App from "../../ui/containers/App";
import Login from "../../ui/components/AccountsWrapper";
import NotFound from "../../ui/components/NotFound/";

// const browserHistory = createBrowserHistory();

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

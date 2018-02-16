// // Client entry point, imports all client code
import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";

// import App from "../imports/ui/containers/App";
// import Login from "../imports/ui/components/AccountsWrapper";
// import NotFound from '../imports/ui/components/NotFound';

import {renderRoutes} from '../imports/startup/client/routes';

import "./main.css";
// import '/imports/startup/client';


Meteor._debug = (function(super_meteor_debug) {
  return function(error, info) {
    if (info && _.has(info, "msg"))
      super_meteor_debug("Streamy message is allowed!", info);
    else super_meteor_debug(error, info);
  };
})(Meteor._debug);

// const browserHistory = createBrowserHistory();

// const renderRoutes = () => {
//   <Router history={browserHistory}>
//     <div>
//       <Route exact path="/" component={App} />
//       <Route path="/login" component={Login} />
//     </div>
//   </Router>;
// };

Meteor.startup(() =>
  ReactDOM.render(renderRoutes(), document.getElementById("root"))
);

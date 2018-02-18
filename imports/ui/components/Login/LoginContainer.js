import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";

import Login from "./Login";

class LoginContainer extends Component {
  render() {
    if (Meteor.isClient){
      const  from  = '/'

      return !Meteor.userId() ? <Login /> : <Redirect to={from} />;
    }

  }
}
export default withRouter(LoginContainer);

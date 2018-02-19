import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import { withTracker } from "meteor/react-meteor-data";

import Login from "./Login";

class LoginContainer extends Component {
  render() {
    // if (Meteor.isClient) {
      const from = "/";
      console.log(this.props.currentUserId);
      return !this.props.currentUserId ? <Login /> : <Redirect to={from} />;
    // }
  }
}
export default withTracker(() => {
  return { 
    currentUserId: Meteor.userId() 
  };
})(LoginContainer);

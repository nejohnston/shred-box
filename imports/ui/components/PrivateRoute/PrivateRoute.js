import React from "react";
import { withRouter } from "react-router";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ authenticated, component: Component, ...rest }) => {
  if (Meteor.isClient)
    return (
      <Route
        {...rest} // set props with the rest of the parent props
        // path={path}
        render={props =>
          !authenticated ? (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          ) : (
            // debugger
            <Component {...props} />
          )
        }
      />
    );
};

export default withRouter(PrivateRoute);

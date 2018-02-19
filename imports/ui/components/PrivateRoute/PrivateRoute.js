import React from "react";
import { withRouter } from "react-router";
import { Route, Redirect } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

const PrivateRoute = ({ component: Component, currentUserId, ...rest }) => {
  // if (Meteor.isClient){
    console.log(currentUserId);
    return (
      <Route
        {...rest} // set props with the rest of the parent props
        // path={path}
        render={props =>
          !(currentUserId ||Meteor.userId()) ? (
            <Redirect
              to={{
                pathname: "/login",
                // state: { from: props.location }
              }}
            />
          ) : (
            // debugger
            <Component {...props} />
          )
        }
      />
    );
  // }
};

export default withTracker(() => {
    return { 
      currentUserId: Meteor.userId() 
    };
  })
(PrivateRoute);

import React from 'react';
// import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';

const PrivateRoute = ({ component: Component, currentUserId, ...rest }) => {
    console.log(currentUserId);
    return (
        <Route
            {...rest} // set props with the rest of the parent props
            render={props =>
                (!(currentUserId || Meteor.userId()) ? (
                    <Redirect
                        to={{
                            pathname: '/login'
                        }}
                    />
                ) : (
                    <Component {...props} />
                ))
            }
        />
    );
};

export default withTracker(() => ({
    currentUserId: Meteor.userId()
}))(PrivateRoute);

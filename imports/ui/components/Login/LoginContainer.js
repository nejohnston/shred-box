import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import { withRouter } from 'react-router';
import { withTracker } from 'meteor/react-meteor-data';

import Login from './Login';
import Instructions from './Instructions';

class LoginContainer extends Component {
    render() {
        // if (Meteor.isClient) {
        const from = '/';
        console.log(this.props.currentUserId);
        return !this.props.currentUserId ? (
            <div>
                <Login />
                <Instructions />
            </div>
        ) : (
            <Redirect to={from} />
        );
        // }
    }
}
export default withTracker(() => ({
    currentUserId: Meteor.userId()
}))(LoginContainer);

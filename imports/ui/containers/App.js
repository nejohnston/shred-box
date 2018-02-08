import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import "./styles.css";

import {Signals} from '../../api/signals';

import { Meteor } from "meteor/meteor";

class App extends Component{

  constructor(){
    super();
  }

  render(){
    return <div>ShredBox</div>
  }


}

export default withTracker(() => {
  
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    signals: Signals.find({}).fetch()
  };
})(App);
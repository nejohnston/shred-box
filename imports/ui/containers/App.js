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
    return
    <div className="input-wrapper">
    <div className="top-wrapper"> 
      
      <div className="top-left">COMING UP: (icon) (icon) (icon) (icon)</div>
      <div className="top-right">SCORE :  1/12 </div>
    
    </div>
    <div className="bottom-wrapper">
    
        <div className="div1">
          <div className="red-button"></div> 
        </div>
      
        <div className="div2">
          <div className="blue-button"></div>
        </div>
      
        <div className="div3">
          <div className="green-button"></div>
        </div>
        <div className="div4">PURPLE BUTTON</div>
    
    </div>
  </div>
  
  }


}

export default withTracker(() => {
  
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    signals: Signals.find({}).fetch()
  };
})(App);
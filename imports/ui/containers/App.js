import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import "./styles.css";

import { Signals } from "../../api/signals";

import { Meteor } from "meteor/meteor";
import BlueButton from "../components/BlueButton";
import GreenButton from "../components/GreenButton";
import PurpleButton from "../components/PurpleButton";
import RedButton from "../components/RedButton";

class App extends Component {
  constructor() {
    super();
  }

<<<<<<< HEAD
// handleClick(buttonColor) {
//   console.log(buttonColor)
// }
// 	render() {
		return (
			<div className="input-wrapper">
				<div className="top-wrapper">
					<div className="top-left">COMING UP: (icon) (icon) (icon) (icon)</div>
					<div className="top-right">SCORE : 1/12 </div>
				</div>
				<div className="bottom-wrapper">
					<div className="div1">
						<div className="red-button" />
					</div>
=======
  render() {
    return (
      <div className="input-wrapper">
        <div className="top-wrapper">
          <div className="top-left">COMING UP: (icon) (icon) (icon) (icon)</div>
          <div className="top-right">SCORE : 1/12 </div>
        </div>
        <div className="bottom-wrapper">
          <div className="div1">
            <RedButton />
          </div>
>>>>>>> 13891a827746e8a6488d066840b97b85a324e43c

          <div className="div2">
            <BlueButton />
          </div>

          <div className="div3">
            <GreenButton />
          </div>
          <div className="div4">
            <PurpleButton />
          </div>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    signals: Signals.find({}).fetch()
  };
})(App);

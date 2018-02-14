import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import { Players } from "../../api/players";
import { Score } from "../../api/score";
import { Songs } from "../../api/songs";
import { Meteor } from "meteor/meteor";
import BlueButton from "../components/BlueButton";
import GreenButton from "../components/GreenButton";
import PurpleButton from "../components/PurpleButton";
import RedButton from "../components/RedButton";
import NextUpDisplay from "../components/NextUpDisplay";
import AccountsWrapper from "../components/AccountsWrapper";
import ScoreBoard from "../components/ScoreBoard";
import "./styles.css";

import { ReactiveVar } from "meteor/reactive-var";
import { Session } from "meteor/session";

const challenge = new ReactiveVar([]);
const challengeResult = new ReactiveVar("");

const buttonClicked = function(id) {
  Streamy.emit("note", { data: id });
  console.log(id);
};

class App extends Component {
  render() {
    // answer is variable that

    return (
      <div className="background">
        <div className="app-wrapper">
          <div className="login-wrapper">
            <AccountsWrapper />
          </div>

          <div className="input-wrapper">
            <div className="top-wrapper">
              <div className="top-left-header">
                <img className="logo" src="./logo.png" />

                {/* what to render? */}
                <div className="answer-box">
                  <NextUpDisplay nextNote={0} />
                  <NextUpDisplay nextNote={1} />
                  <NextUpDisplay nextNote={2} />
                  <NextUpDisplay nextNote={3} />
                </div>
              </div>

              <div className="top-right-header">
                <ScoreBoard turn={0} score={0} />
              </div>
            </div>
            <div className="bottom-wrapper">
              <div className="div1">
                <RedButton
                  id={0}
                  onClick={buttonClicked(0)}
                  // noteChoice={1}
                />
              </div>

              <div className="div2">
                <BlueButton
                  id={1}
                  onClick={buttonClicked(1)}
                  // noteChoice={1}
                />
              </div>

              <div className="div3">
                <GreenButton
                  id={2}
                  onClick={buttonClicked(2)}
                  // noteChoice={1}
                />
              </div>
              <div className="div4">
                <PurpleButton
                  id={3}
                  onClick={buttonClicked(3)}
                  // noteChoice={1}
                />
              </div>
            </div>
          </div>
        </div>

        <button className="button1">New Game</button>
        <button className="button2">Quit</button>
        <button className="reset-div">Reset</button>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("songs");
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    players: Players.find({}).fetch(),
    score: Score.find({}).fetch(),
    songs: Songs.find({}).fetch()
  };
})(App);

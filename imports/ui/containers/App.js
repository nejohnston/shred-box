import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
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

const challengeResult = new ReactiveVar("");
let turn = 0;




const snd = new Audio("ThunderKick.wav");
const snd3 = new Audio("GreenPerc2.wav");
const snd2 = new Audio("BlueHat.wav");
const snd1 = new Audio("BaiscKick2.wav");
const errorsnd = new Audio("record-scratch.mp3");

Streamy.on("challenge-result", (d, s) => {
  challengeResult.set(d.data);

  Meteor.setTimeout(() => {
    challengeResult.set("");
  }, 1500);
});

const buttonClicked = function(id) {
  Streamy.emit("note", { data: id });
  console.log(id);
};
class App extends Component {
  constructor() {
    super();

    this.state = {
      turn: 0,
      challenge: []
    };
    Streamy.on("challenge", (d, s) => {
      console.log("Initial challenge pull", d);
      // console.log(this.props.currentUserId);
      if (d.data.userid === this.props.currentUserId) {
        //      challenge.set(d.data.challenge)
        this.setState({ challenge: d.data.challenge });
        this.setState({ turn: 0 });x``
      } else {
        this.setState({ challenge: [] });
      }
    });
  }

  buttonClicked = id => {
    if (Session.get("started")) {
      console.log("Button to emit: ", id);
      Streamy.emit("note", { data: id });
    }
  };
  startClicked = e => {
    Session.set("started", true);
    Meteor.call("songs.createChallengeArray");
    Meteor.call("songs.start");
    console.log("Started");
    setTimeout(function() {
      snd.play();
    }, 800);
    setTimeout(function() {
      snd1.play();
    }, 1200);
    setTimeout(function() {
      snd2.play();
    }, 1600);
    setTimeout(function() {
      snd3.play();
    }, 2000);
    setTimeout(function() {
      errorsnd.play();
    }, 2400);
  };
  resetClicked = e => {
    Session.set("started", false);
    Meteor.call("songs.reset");
    console.log("Resetted");
  };

  turnUp = () => {
    if (this.state.turn > 2) {
      let restartTurn = 0;
      this.setState({ turn: restartTurn });
    } else {
      let nextTurn = this.state.turn + 1;
      this.setState({ turn: nextTurn });
    }
    console.log("Turn: ", this.state.turn);
  };

  onClick = (id, turn) => {
    this.buttonClicked(id);
    this.turnUp(turn);
  };

  render() {
    console.log(this.props.score);
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
                  <NextUpDisplay nextNote={this.state.challenge[0]} />
                  <NextUpDisplay nextNote={this.state.challenge[1]} />
                  <NextUpDisplay nextNote={this.state.challenge[2]} />
                  <NextUpDisplay nextNote={this.state.challenge[3]} />
                </div>
              </div>

              <div className="top-right-header">
                <ScoreBoard turn={0} score={0} />
              </div>
            </div>
            <div className="bottom-wrapper">
              <div
                className="red-div"
                onClick={() => {
                  this.onClick(0, turn);
                }}
              >
                <RedButton
                  id={0}
                  noteChoice={this.state.challenge[this.state.turn]}
                />
              </div>

              <div
                className="blue-div"
                onClick={() => {
                  this.onClick(1, turn);
                }}
              >
                <BlueButton
                  noteChoice={this.state.challenge[this.state.turn]}
                />
              </div>

              <div
                className="green-div"
                onClick={() => {
                  this.onClick(2, turn);
                }}
              >
                <GreenButton
                  id={2}
                  noteChoice={this.state.challenge[this.state.turn]}
                />
              </div>
              <div
                className="purple-div"
                onClick={() => {
                  this.onClick(3, turn);
                }}
              >
                <PurpleButton
                  id={3}
                  noteChoice={this.state.challenge[this.state.turn]}
                />
              </div>
            </div>
          </div>
        </div>

        <button
          className="button1"
          onClick={() => {
            this.startClicked();
          }}
        >
          Start
        </button>
        <button className="button2">Quit</button>
        <button
          className="reset-div"
          onClick={() => {
            this.resetClicked();
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("songs");
  Meteor.subscribe("score");
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),

    score: Score.find({}).fetch(),
    songs: Songs.find({}).fetch()
  };
})(App);

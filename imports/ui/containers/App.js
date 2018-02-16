import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { ReactiveVar } from "meteor/reactive-var";
import { Session } from "meteor/session";
import { Score } from "../../api/score";
import { Songs } from "../../api/songs";

import BlueButton from "../components/BlueButton";
import GreenButton from "../components/GreenButton";
import PurpleButton from "../components/PurpleButton";
import RedButton from "../components/RedButton";
import NextUpDisplay from "../components/NextUpDisplay";
import AccountsWrapper from "../components/AccountsWrapper";
import ScoreBoard from "../components/ScoreBoard";
import "./styles.css";

let turn = 0;
const challengeResult = new ReactiveVar("");
const snd = new Audio("ThunderKick.wav");
const snd3 = new Audio("GreenPerc2.wav");
const snd2 = new Audio("BlueHat.wav");
const snd1 = new Audio("BaiscKick2.wav");
const errorsnd = new Audio("record-scratch.mp3");

Session.set("started", false);

Streamy.on("endgame", (d,s)=>{
  console.log(d.data.end);
})

Streamy.on("challenge-result", (d, s) => {
  challengeResult.set(d.data);

  Meteor.setTimeout(() => {
    challengeResult.set("");
  }, 1500);
});


class App extends Component {
  constructor() {
    super();
    this.state = {
      turn: 0,
      challenge: []
    };

    Streamy.on("challenge", (d, s) => {
      if (d.data.userid === this.props.currentUserId) {
        this.setState({ turn: 0, challenge: d.data.challenge });
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
    setTimeout(function() {snd.play();}, 800);
    setTimeout(function() {snd1.play();}, 1200);
    setTimeout(function() {snd2.play();}, 1600);
    setTimeout(function() {snd3.play();
    }, 2000);
    setTimeout(function() {
      errorsnd.play();
    }, 2400);
  };

  resetClicked = e => {
    Session.set("started", false);
    Meteor.call("songs.reset");
    this.setState({ turn: 0 });
    this.setState({ challenge: [] });
  };

  turnUp = () => {
    if (this.state.turn > 2) {
      let restartTurn = 0;
      this.setState({ turn: restartTurn });
    } else {
      let nextTurn = this.state.turn + 1;
      this.setState({ turn: nextTurn });
    }
  };

  onClick = (id, turn) => {
    this.buttonClicked(id);
    this.turnUp(turn);
  };

  render() {
  //   if (this.props.lives[0].lives.length) {
  //     if (this.props.lives[0].lives === 0) {
  //     <div className="lose">You have Lost!</div>
  //   }
  // }
  
    if (this.state.challenge.length) {
      buttons = (
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
              score={this.props.score[0].score}
              lives={this.props.lives[0].lives}
            />
          </div>

          <div
            className="blue-div"
            onClick={() => {
              this.onClick(1, turn);
            }}
          >
            <BlueButton
              id={1}
              noteChoice={this.state.challenge[this.state.turn]}
              score={this.props.score[0].score}
              lives={this.props.lives[0].lives}
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
              score={this.props.score[0].score}
              lives={this.props.lives[0].lives}
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
              score={this.props.score[0].score}
              lives={this.props.lives[0].lives}
            />
          </div>
        </div>
      );
    } else {
      buttons = <div className="bottom-wrapper" />;
    }
    if (this.state.challenge.length) {
      logo = <div />;
    } else {
      logo = <img className="logo" src="./logo.png" />;
    }

    return (
      <div className="background">
        <div className="app-wrapper">
          <div className="login-wrapper">
            <AccountsWrapper />
          </div>
          <div className="button-wrapper">
            <button
              className="start-button"
              onClick={() => {
                this.startClicked();
              }}
            >
              Start
            </button>

            <button
              className="reset-button"
              onClick={() => {
                this.resetClicked();
              }}
            >
              Reset
            </button>
          </div>

          <div className="input-wrapper">
            <div className="top-wrapper">
              <div className="top-left-header">
                {logo}
                {/* what to render? */}
                <div className="answer-box">
                  <NextUpDisplay nextNote={this.state.challenge[0]} />
                  <NextUpDisplay nextNote={this.state.challenge[1]} />
                  <NextUpDisplay nextNote={this.state.challenge[2]} />
                  <NextUpDisplay nextNote={this.state.challenge[3]} />
                </div>
              </div>
              <div className="top-right-header">
                {this.props.score.length ? (
                  <ScoreBoard
                    lives={0}
                    score={this.props.score[0].score}
                    lives={this.props.lives[0].lives}
                  />
                ) : (
                  <ScoreBoard lives={0} score={0} />
                )}
              </div>
            </div>
            {buttons}
          </div>
        </div>
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
    score: Score.find({ id: 1 }).fetch(),
    lives: Score.find({ id: 2 }).fetch(),
    songs: Songs.find({}).fetch()
  };
})(App);

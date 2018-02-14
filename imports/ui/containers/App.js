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

const challenge = new ReactiveVar([1,2,3,4]);
const challengeResult = new ReactiveVar("");
let turn = 0;

Session.set("started", false);

Streamy.on("challenge", (d, s) => {
  console.log(">>>>>>>>>>>>>>", d);
  challenge.set(d.data.challenge);
});

Streamy.on("challenge-result", (d, s) => {
  challengeResult.set(d.data);
  console.log(challengeResult);
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
      turn: 0
    };
  }
  
  buttonClicked = (id) => {
    if(Session.get('started')) {
    console.log("Button to emit: ", id);
    Streamy.emit('note', { data: id })
    }
  };
  startClicked = e => {
    Session.set("started", true);
    Meteor.call("start song");
    console.log("Started");
  };
  resetClicked = e => {
    Session.set("started", false);
    Meteor.call("reset");
    console.log("Resetted");
  };

  turnUp = () => {
    if (this.state.turn > 2) {
      let restartTurn = 0;
      this.setState({ turn: restartTurn });
    } else {
      let nextTurn = this.state.turn + 1;
      this.setState({ turn: nextTurn })
  }
  console.log("Turn: ", this.state.turn)
}

  onClick = (id,turn) => {
    this.buttonClicked(id);
    this.turnUp(turn);
  }

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
                  <NextUpDisplay nextNote={challenge.curValue[0]} />
                  <NextUpDisplay nextNote={challenge.curValue[1]} />
                  <NextUpDisplay nextNote={challenge.curValue[2]} />
                  <NextUpDisplay nextNote={challenge.curValue[3]} />
                </div>
              </div>

              <div className="top-right-header">
                <ScoreBoard turn={0} score={0} />
              </div>
            </div>
            <div className="bottom-wrapper">

            
              <div className="red-div"
              onClick={() => {this.onClick(0, turn)}} >
                <RedButton id={0} 
                  noteChoice={challenge.curValue[this.state.turn]}
                />
              </div>

              <div className="blue-div"
              onClick={() => {this.onClick(1, turn)}} >
                <BlueButton 
                 noteChoice={challenge.curValue[this.state.turn]}
                />
              </div>

              <div className="green-div"
              onClick={() => {this.onClick(2, turn)}}  >
                <GreenButton id={2} 
                 noteChoice={challenge.curValue[this.state.turn]}
                />
              </div>
              <div className="purple-div"
              onClick={() => {this.onClick(3, turn)}}  >
                <PurpleButton id={3}     
                 noteChoice={challenge.curValue[this.state.turn]}
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
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    players: Players.find({}).fetch(),
    score: Score.find({}).fetch(),
    songs: Songs.find({}).fetch()
  };
})(App);

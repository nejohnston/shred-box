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

const randomArray = (length, max) => {
  return Array.apply(null, Array(length)).map(function() {
    return Math.round(Math.random() * max);
  });
};

const array = randomArray(42, 3);
let answer = array;

class App extends Component {
  constructor() {
    super();
    this.state = {
      turn: 0,
      score: 0
    };
    this.display = this.display.bind(this);
    this.createChallengeArray = this.createChallengeArray.bind(this);
  }

  createChallengeArray() {
    Meteor.call("songs.createChallengeArray");
    // Meteor.call('songs.dispatchArray');
  }

  display() {
    // if (this.props.currentUserId ===)
    Meteor.call("songs.dispatchArray");
    // console.log(Meteor.call("players.timeoutLoop"));
  }
  cancelArrayDispatch(){
    // Meteor.clearInterval(this.createChallengeArray);
    Meteor.call("songs.cancelArrayDispatch");
  }
  // componentDidMount() {
  // 	const isLoggedIn = this.props.currentUserId;
  // 	isLoggedIn?
  // 	console.log(this.props.players)
  // 	: '';

  // }

  render() {
    // this.createChallengeArray();
		// Songs.remove();
		// if (this.props.songs.length < )
   
    this.display();
    // console.log(this.props.songs);
    if (this.state.turn > 3) {
      let restartTurn = 0;
      this.setState({ turn: restartTurn });
    }
    const turnUp = () => {
      let nextTurn = this.state.turn + 1;
      let nextScore = this.state.score + 1;
      this.setState({
        turn: nextTurn,
        score: nextScore
      });
    };
    // let answer = array[0 + this.state.turn];

    // handleClick(buttonColor) {
    //   console.log(buttonColor)
    // }
    console.log(this.props.songs);
    return (
      <div className="background">
        <div className="app-wrapper">
          <div className="login-wrapper">
            <AccountsWrapper />
          </div>

          <div className="input-wrapper">
            <div className="top-wrapper">
              <div className="top-left">
                {this.state.turn === 0 ? (
                  <div className="answer-box">
                    <NextUpDisplay answer={answer[this.state.score]} />
                    <NextUpDisplay answer={answer[this.state.score + 1]} />
                    <NextUpDisplay answer={answer[this.state.score + 2]} />
                    <NextUpDisplay answer={answer[this.state.score + 3]} />
                  </div>
                ) : (
                  ""
                )}
              </div>
              <button onClick={this.createChallengeArray}></button>
              <button onClick={this.cancelArrayDispatch}></button>
              <div className="top-right">
                <ScoreBoard turn={this.state.turn} score={this.state.score} />
              </div>
            </div>
            <div className="bottom-wrapper">
              <div className="div1" onClick={turnUp}>
                <RedButton
                  score={this.state.score}
                  answer={answer[this.state.score]}
                />
              </div>

              <div className="div2" onClick={turnUp}>
                <BlueButton
                  score={this.state.score}
                  answer={answer[this.state.score]}
                />
              </div>

              <div className="div3" onClick={turnUp}>
                <GreenButton
                  score={this.state.score}
                  answer={answer[this.state.score]}
                />
              </div>
              <div className="div4" onClick={turnUp}>
                <PurpleButton
                  score={this.state.score}
                  answer={answer[this.state.score]}
                />
              </div>
            </div>
          </div>
        </div>
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

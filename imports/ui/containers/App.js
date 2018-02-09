import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import "./styles.css";
import { Players } from "../../api/players";
import { Meteor } from "meteor/meteor";
import BlueButton from "../components/BlueButton";
import GreenButton from "../components/GreenButton";
import PurpleButton from "../components/PurpleButton";
import RedButton from "../components/RedButton";
import NextUpDisplay from "../components/NextUpDisplay";
import AccountsWrapper from "../components/AccountsWrapper";
import ScoreBoard from "../components/ScoreBoard";

const randomArray = (length, max) => {
  return Array.apply(null, Array(length)).map(function() {
    return Math.round(Math.random() * max);
  });
};
const array = randomArray(12, 3);
// let answer = [array[0],array[1],array[2],array[3]]
let answer = array;

class App extends Component {
  constructor() {
    super();
    this.state = {
      turn: 0,
      score: 0
    };
  }
  // componentDidMount() {
  // 	const isLoggedIn = this.props.currentUserId;
  // 	isLoggedIn?
  // 	console.log(this.props.players)
  // 	: '';

  // }

  render() {
    const turnUp = () => {
      let nextturn = this.state.turn + 1;
      this.setState({ turn: nextturn });
    };
    // let answer = array[0 + this.state.turn];

    // handleClick(buttonColor) {
    //   console.log(buttonColor)
    // }

    // console.log();
    Meteor.call("players.timeoutLoop");
    // return (
    //

    console.log(answer);
    return (
      <div className="app-wrapper">
        <div className="login-wrapper">
          <AccountsWrapper />
        </div>
        <div className="background">
          <div className="input-wrapper">
            <div className="top-wrapper">
              <div className="top-left">
                <NextUpDisplay
                  answer={answer[this.state.turn]}
                  turn={this.state.turn}
                />
                <NextUpDisplay
                  answer={answer[this.state.turn + 1]}
                  turn={this.state.turn}
                />
                <NextUpDisplay
                  answer={answer[this.state.turn + 2]}
                  turn={this.state.turn}
                />
                <NextUpDisplay
                  answer={answer[this.state.turn + 3]}
                  turn={this.state.turn}
                />
              </div>
              <div className="top-right">
                <ScoreBoard turn={this.state.turn} score={this.state.score} />
              </div>
            </div>
            <div className="bottom-wrapper">
              <div className="div1" onClick={turnUp}>
                <RedButton answer={answer[this.state.turn]} />
              </div>

              <div className="div2" onClick={turnUp}>
                <BlueButton answer={answer[this.state.turn]} />
              </div>

              <div className="div3" onClick={turnUp}>
                <GreenButton answer={answer[this.state.turn]} />
              </div>
              <div className="div4" onClick={turnUp}>
                <PurpleButton answer={answer[this.state.turn]} />
              </div>
            </div>
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
    players: Players.find({}).fetch()
  };
})(App);

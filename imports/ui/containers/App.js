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

class App extends Component {
  constructor() {
    super();
    this.state = {
      turn: 1,
      score: 0
    };
  }
  componentDidMount() {
    // console.log(this.props.players);
  }
  render() {
    const turnUp = () => {
      let nextturn = this.state.turn + 1;
      this.setState({ turn: nextturn });
    };

    const randomArray = (length, max) => {
      return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * max);
      });
    };
    let array = randomArray(14, 3);
    let answer = [array[0], array[1], array[2], array[3]];

    console.log(answer);
    return (
      <div className="background">
        <div className="input-wrapper">
          <div className="top-wrapper">
            <div className="top-left">
              <NextUpDisplay answer={answer} turn={this.state.turn} />
            </div>
            <div className="top-right">
              <ScoreBoard turn={this.state.turn} score={this.state.score} />
            </div>
            <div className="bottom-wrapper">
              <div className="div1" onClick={turnUp}>
                <RedButton answer={answer} />
              </div>

              <div className="div2" onClick={turnUp}>
                <BlueButton answer={answer} />
              </div>

              <div className="div3" onClick={turnUp}>
                <GreenButton answer={answer} />
              </div>
              <div className="div4" onClick={turnUp}>
                <PurpleButton answer={answer} />
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

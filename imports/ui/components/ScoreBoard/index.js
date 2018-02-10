import React from "react";
import PropTypes from "prop-types";

function ScoreBoard({turn, score }) {
  
    return (
    <div className="scoreboard">
      <div className="score">Clicks : {score}</div>
      <div className="turn">Turn : {turn}</div>
    </div>
    )
  }


export default ScoreBoard;

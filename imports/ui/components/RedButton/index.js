import React from "react";
import PropTypes from "prop-types";

const redClicked = (answer, turn) => {

  if (answer === 0) {
   
  console.log("correct")
  console.log(turn)
  } else {
    console.log("wrong")
    turn = turn + 1;
    console.log(turn)
  }
};

const RedButton = ({answer, turn}) => (
  <div onClick={() => {redClicked(answer)}}
  className="red-button">
  </div>
);

export default RedButton;

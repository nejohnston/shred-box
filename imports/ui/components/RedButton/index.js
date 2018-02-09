import React from "react";
import PropTypes from "prop-types";

const redClicked = (answer, turn) => {

  if (answer === 0) {
   
    alert("correct");
  console.log(turn)
  } else {
    console.log("wrong")
    
    console.log(turn)
  }
};

const RedButton = ({answer, turn}) => (
  <div onClick={() => {redClicked(answer)}}
  className="red-button">
  </div>
);

export default RedButton;

import React from "react";
import PropTypes from "prop-types";

const redClicked = (answer) => {

  if (answer === 0) {
  console.log("correct")
  } else {
    console.log("wrong")
  }
};

const RedButton = ({answer}) => (
  <div onClick={() => {redClicked(answer)}}
  
  className="red-button">
  </div>
);

export default RedButton;

import React from "react";
import PropTypes from "prop-types";

const greenClicked = (answer) => {
  console.log(answer)
  if (answer === 2) {
  console.log("correct")
  } else {
    console.log("wrong")
  }
};
const GreenButton = ({answer}) => (
  <div onClick={() => {greenClicked(answer)}}
  
  className="green-button">

  
  </div>
);

export default GreenButton;

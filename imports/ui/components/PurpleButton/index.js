import React from "react";
import PropTypes from "prop-types";

const purpleClicked = answer => {
  console.log(answer);
  if (answer === 3) {
    alert("correct");
  } else {
    console.log("wrong");
  }
};

const PurpleButton = ({ answer }) => (
  <div
    onClick={() => {
      purpleClicked(answer);
    }}
    className="purple-button"
  />
);
export default PurpleButton;

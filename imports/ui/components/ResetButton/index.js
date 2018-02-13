import React from "react";
import PropTypes from "prop-types";

const resetClicked = (score, answer) => {
  return (score = 0), (answer = 0);
};
const ResetButton = ({ score, answer }) => (
  <button
    onClick={() => {
      resetClicked(score, answer);
    }}
    className="reset"
  >
    reset
  </button>
);

export default ResetButton;

import React from "react";
import PropTypes from "prop-types";
function colorizeAnswer(answer) {
  if (answer == 0) {
    return <div className="red-answer">red</div>;
  }
  if (answer == 1) {
    return <div className="blue-answer">blue</div>;
  }
  if (answer == 2) {
    return <div className="green-answer">green</div>;
  } else {
    return <div className="purple-answer">purple</div>;
  }
}
const NextUpDisplay = ({ answer }) => colorizeAnswer({ answer });
export default NextUpDisplay;

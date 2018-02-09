import React from "react";
import PropTypes from "prop-types";
function colorizeAnswer({ answer }) {
  for (const value of answer)
    (function(value) {
      if (value == 0) {
        return <div className="red-answer" />;
      }
      if (value == 1) {
        return <div className="blue-answer" />;
      }
      if (value == 2) {
        return <div className="green-answer" />;
      } else {
        console.log(value);
        return <div className="purple-answer" />;
      }
    });
}
const NextUpDisplay = ({ answer }) => colorizeAnswer({ answer });
export default NextUpDisplay;

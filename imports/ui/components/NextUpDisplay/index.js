import React from "react";
import PropTypes from "prop-types";

function colorizeAnswer({answer}) {
 
  if (answer == 0) {
    return <div className="red-answer" />;
  }
  if (answer == 1) {
    return <div className="blue-answer" />;
  }
  if (answer == 2) {
    return <div className="green-answer" />;
  } else {
    
    return <div className="purple-answer" />;
    // }
  }
}

const NextUpDisplay = ({ answer }) => colorizeAnswer({ answer });
export default NextUpDisplay;

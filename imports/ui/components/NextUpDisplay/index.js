import React from "react";
import PropTypes from "prop-types";
function colorizeAnswer({ answer }) {
  if (answer == 0) {
    return <div className="red-answer"></div>;
  }
  if (answer == 1) {
    return <div className="blue-answer"></div>;
  }
  if (answer == 2) {
    return <div className="green-answer"></div>;
  } else {
<<<<<<< HEAD
    return <div className="purple-answer"></div>;
=======
    console.log(answer);
    return <div className="purple-answer">purple</div>;
>>>>>>> 9749d829c255bd1c33bd2e9c5a752093487cefe7
  }
}
const NextUpDisplay = ({ answer }) => colorizeAnswer({ answer });
export default NextUpDisplay;

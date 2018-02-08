import React from "react";
import PropTypes from "prop-types";




const blueClicked = () => {

  let answer = "1";
  
  if (answer === "1") {

  console.log("correct")
  } else {
    console.log("wrong")
  }
};

const BlueButton = ({  }) => (
  <div onClick={blueClicked} className="blue-button">
  
    Blue
  </div>
);

// BlueButton.propTypes = {
//   blueInput: PropTypes.func.isRequired
// };

export default BlueButton;

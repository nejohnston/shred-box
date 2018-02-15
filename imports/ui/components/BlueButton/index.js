import React from "react";
import PropTypes from "prop-types";

const blueClicked = (noteChoice, sound) => {
  // if (!this.props.lives===0){
  if (noteChoice === 1) {
    const snd3 = new Audio("GreenPerc2.wav");
    snd3.play();
<<<<<<< HEAD
    console.log("right")
=======
    Meteor.call("score.updateScore");
>>>>>>> bdc3843f660e5a3cb2c4e9748e1fcf23329072b9
  } else {
    const errorsnd = new Audio("record-scratch.mp3");
    console.log("wrong")
    errorsnd.play();
    Meteor.call("score.updateLives");
  }
  // }else{
  //   alert (" you've lost")
  // }
};

const BlueButton = ({ noteChoice }) => (
  <div
    onClick={() => {
      blueClicked(noteChoice);
    }}
    className="blue-button"
  />
);

export default BlueButton;

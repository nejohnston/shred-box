import React, { Component } from "react";
import PropTypes from "prop-types";
import Correct from "../Correct";
import { Meteor } from "meteor/meteor";
// var Sound = require('react-sound').default;

const greenClicked = (score, answer) => {
  console.log(answer);
  if (answer === 2) {
    const snd = new Audio("BlueHat.wav"); // buffers automatically when created
    snd.play();
  } else {
    const errorsnd = new Audio("record-scratch.mp3"); 
    alert("GAME OVER, you got " + score + " correct answers!!")// buffers automatically when created
    errorsnd.play();

    console.log("wrong");
  }
};
const GreenButton = ({score, answer }) => (
  <div
    onClick={() => {
      greenClicked(score, answer);
    }}
    className="green-button"
  />
);

export default GreenButton;

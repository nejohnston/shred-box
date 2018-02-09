import React, { Component } from "react";
import PropTypes from "prop-types";
import Correct from "../Correct";
import { Meteor } from "meteor/meteor";
// var Sound = require('react-sound').default;

const greenClicked = answer => {
  console.log(answer);
  if (answer === 2) {
    const snd = new Audio("BlueHat.wav"); // buffers automatically when created
    snd.play();
  } else {
    const snd = new Audio("record-scratch.mp3"); // buffers automatically when created
    snd.play();

    console.log("wrong");
  }
};
const GreenButton = ({ answer }) => (
  <div
    onClick={() => {
      greenClicked(answer);
    }}
    className="green-button"
  />
);

export default GreenButton;

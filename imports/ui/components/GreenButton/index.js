import React, {Component} from "react";
import PropTypes from "prop-types";
import Correct from '../Correct'
import { Meteor } from 'meteor/meteor';
// var Sound = require('react-sound').default;
import Sound from 'react-sound';

const greenClicked = (answer) => {
  console.log(answer)
  if (answer === 2) {
    
  } 
  else {
      
      const snd = new Audio("BlueHat.wav"); // buffers automatically when created
     snd.play();
     
   
    console.log("wrong")
  }
};
const GreenButton = ({answer}) => (
  <div onClick={() => {greenClicked(answer)}}
  
  className="green-button">

  
  </div>
);

export default GreenButton;

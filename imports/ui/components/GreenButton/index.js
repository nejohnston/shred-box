import React, {Component} from "react";
import PropTypes from "prop-types";
import Correct from '../Correct'
import { Meteor } from 'meteor/meteor';

const greenClicked = (answer) => {
  console.log(answer)
  if (answer === 2) {
  alert("correct");

  } 
  else {
    console.log("wrong")
  }
};
const GreenButton = ({answer}) => (
  <div onClick={() => {greenClicked(answer)}}
  
  className="green-button">

  
  </div>
);

export default GreenButton;

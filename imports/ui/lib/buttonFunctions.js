//these are all the functions that pertain to the button functionality, they used to be in app.js
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { ReactiveVar } from "meteor/reactive-var";
import { Session } from "meteor/session";

export const buttonClicked = id => {
  if (Session.get("started")) {
    console.log("Button to emit: ", id);
    Streamy.emit("note", { data: id });
  }
};

export const startClicked = e => {
  Session.set("started", true);
  Meteor.call("songs.createChallengeArray");
  Meteor.call("songs.start");
  console.log("Started");
  setTimeout(function() {
    snd.play();
  }, 800);
  setTimeout(function() {
    snd1.play();
  }, 1200);
  setTimeout(function() {
    snd2.play();
  }, 1600);
  setTimeout(function() {
    snd3.play();
  }, 2000);
  setTimeout(function() {
    errorsnd.play();
  }, 2400);
};

export const resetClicked = e => {
  Session.set("started", false);
  Meteor.call("songs.reset");
  this.setState({ turn: 0 });
  this.setState({ challenge: [] });
};

export const turnUp = () => {
  if (this.state.turn > 2) {
    let restartTurn = 0;
    this.setState({ turn: restartTurn });
  } else {
    let nextTurn = this.state.turn + 1;
    this.setState({ turn: nextTurn });
  }
  // console.log("Turn: ", this.state.turn);
};

export const onClick = (id, turn) => {
  this.buttonClicked(id);
  this.turnUp(turn);
};

// // Client entry point, imports all client code
import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";

import App from "../imports/ui/containers/App";
import "./main.css";

Meteor._debug = (function(super_meteor_debug) {
  return function(error, info) {
    if (info && _.has(info, "msg"))
      super_meteor_debug("Streamy message is allowed!", info);
    else super_meteor_debug(error, info);
  };
})(Meteor._debug);

Meteor.startup(() => ReactDOM.render(<App />, document.getElementById("root")));

// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
// import { Session } from 'meteor/session';

// import './head.html';

// const challenge = new ReactiveVar([])
// const challengeResult = new ReactiveVar("")

// Streamy.on('challenge',(d, s) => {
//   console.log('>>>>>>>>>>>>>>', d)
//   console.log(Meteor.userId());
//   if(d.data.userid === Meteor.userId()){
//      challenge.set(d.data.challenge)
//   }
//   else{
//     challenge.set("");
//   }
//   // challenge.set("");
//   // challenge.set(d.data.challenge)
// });

// Streamy.on('challenge-result',(d, s) => {
//   challengeResult.set(d.data)

//   Meteor.setTimeout(() => {
//     challengeResult.set("")
//   }, 1500)
// });

// Template.challenge.helpers({
//   challenge() {
//     return challenge.get()
//   },
//   challengeResult() {
//     return challengeResult.get();
//   }
// })

// Session.set('started', false)
// Template.typer.events({
//   'click li'(e) {
//     if(Session.get('started')) {
//       Streamy.emit('note', { data: e.target.id })
//     }
//   },
//   'click #start'(e) {
//     Session.set('started', true)
//     Meteor.call("songs.createChallengeArray");
//     Meteor.call('songs.start')
//   },
//   'click #reset'(e) {
//     Session.set('started', false)
//     challenge.set([])
//     Meteor.call('songs.reset')
//   }
// })

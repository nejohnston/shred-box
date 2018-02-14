import { Mongo } from "meteor/mongo";

import { gameInterval } from "./helpers.js";

export const Songs = new Mongo.Collection("songs");

let intervalId;

const intervalGenerator = i => {
  intervalId = Meteor.setInterval(() => {
    Songs.insert({ userid: users[i], challenge: challengeArray() });
  }, 10000);

  console.log(intervalId);
  return intervalId;
  // return intervalId;
};
const challengeArray = () => {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 4));
};
const users = Meteor.users
  .find({})
  .fetch()
  .map(user => user._id);
// if (Meteor.isServer) {
//   Meteor.publish("songs", function todosPublication() {
//     return Songs.find({ owner: this.userId });
//     // current player variable, next player variable?
//   });
// }

Meteor.methods({
  // Need a method to create challenge array, this is the array of colors
  // each user will be inputting
  "songs.createChallengeArray"() {
    // if (!this.userId) {
    //   throw new Meteor.Error(
    //     "songs.not-authorized",
    //     "You must be logged in to play"
    //   );
    // }

    //TODO: CHANGE TO DYNAMIC VAR
    const length = 1;

    // if ( Songs.find().count()){
    if (!this.isSimulation) {
      if (Songs.find({}).count() !== length * users.length) {
        if (Songs.find({}).count() !== 0) {
          Songs.remove({});
        }

        for (let i = 0; i < length; i++) {
          for (let k = 0; k < users.length; k++) {
            intervalId = intervalGenerator(k);
            // Songs.insert({userid: users[k], intervalId: intervalId});
          }
        }

        // console.log(intervalId);
      }
    }
    // }

    // console.log(Songs.find({}).fetch());
  },

  "songs.dispatchArray"() {
    if (!this.userId) {
      throw new Meteor.Error(
        "songs.not-authorized",
        "You must be logged in to play"
      );
    }

    // console.log(songs);
    if (Meteor.isServer) {
      // Meteor.setTimeout(() => {
      // Songs.find({}).forEach(song=>{
      users.forEach(userid => {
        Meteor.setTimeout(() => {
          Meteor.publish("songs", function todosPublication() {
            // let songs = Songs.find({ userid: this.userId });
            let songs = Songs.find({ userid: userid });
            return songs;
          });
        });
      });

      //   },
      //   1000
      // );
      // songs.map(song => {
      //   console.log(song);
      //   return gameInterval(song);
      // });
      // });
    }
  },
  "songs.cancelArrayDispatch"() {
    // const intervalId = Songs.find({userid: this.userId}, {_id: 0, intervalId: 1});
    console.log(intervalId);
    Meteor.clearInterval(intervalId);
  }
});

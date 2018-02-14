import { Mongo } from "meteor/mongo";

import { gameInterval } from "./helpers.js";

export const Songs = new Mongo.Collection("songs");


if (Meteor.isServer) {
  Meteor.publish('songs', function songsPublication() {
    return Songs.find({});
  });
}



const challengeArray = () => {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 4));
};
const users = Meteor.users
  .find({})
  .fetch()
  .map(user => user._id);


Meteor.methods({

  "songs.createChallengeArray"() {
    if (!this.userId) {
      throw new Meteor.Error(
        "songs.not-authorized",
        "You must be logged in to play"
      );
    }

    //TODO: CHANGE TO DYNAMIC VAR
    const length = 5;

    // if ( Songs.find().count()){
    // if (!this.isSimulation) {
      // if(Songs.find({}).count()){
      if (Songs.find({}).count() !== length * users.length) {
        if (Songs.find({}).count() !== 0) {
          Songs.remove({});
        }

        for (let i = 0; i < length; i++) {
          for (let k = 0; k < users.length; k++) {
           
            Songs.insert({userid: users[k], challenge: challengeArray()});
          }
        }

      }
    // }


  },

});

import { Mongo } from "meteor/mongo";

export const Songs = new Mongo.Collection("songs");

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
    // CODE HERE
    // Checking just if there is a user, todo doesn't have
    // an owner b/c it hasn't been created duh
    // meteor exposes userid from server side
    if (!this.userId) {
      throw new Meteor.Error(
        "songs.not-authorized",
        "You must be logged in to create a todo"
      );
    }
    const challengeArray = Array.from({ length: 4 }, () =>
      Math.floor(Math.random() * 4)
    );
    const users = Meteor.users
      .find({})
      .fetch()
      .map(user => user._id);

    //TODO: CHANGE TO DYNAMIC VAR
    const length = 5;

    for (let i = 0; i < length; i++) {
      for (let k = 0; k < users.length; k++) {
        Songs.insert({ userid: users[k], challenge: challengeArray });
      }
    }
  }
});

import { Mongo } from "meteor/mongo";

export const Songs = new Mongo.Collection("songs");

if (Meteor.isServer) {
  Meteor.publish("songs", function todosPublication() {
    return Songs.find({ owner: this.userId });
    // current player variable, next player variable?
  });
}

Meteor.methods({
  // Need a method to create challenge array, this is the array of colors
  // each user will be inputting
  "songs.createChallengeArray"(item) {
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
    Songs.insert({
      challenge: inputValue,
      complete: false,
      player: this.userId
    });
  }
  // User input of challenge array
});

import { Mongo } from "meteor/mongo";

export const Score = new Mongo.Collection("score");

if (Meteor.isServer) {
  Meteor.publish("score", function scorePublication() {
    return Score.find({});
  });
}

const lives = 3;
Meteor.methods({
  "score.updateScore"() {
    if (!this.userId) {
      throw new Meteor.Error(
        "songs.not-authorized",
        "You must be logged in to play"
      );
    } else {
    }
  },
  "score.updateLives"() {
    if (lives < 0) {
      lives--;
    } else {
      Meteor.call("songs.reset");
    }
  }
});

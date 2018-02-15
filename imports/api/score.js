import { Mongo } from "meteor/mongo";

export const Score = new Mongo.Collection("score");

if (Meteor.isServer) {
  Meteor.publish("score", function scorePublication() {
    return Score.find({});
  });
}
const score = 0;
const lives = 3;
Meteor.methods({
  "score.updateScore"() {
    score++;
  },
  "score.updateLives"() {
    if (lives < 0) {
      lives--;
    } else {
      Meteor.call("songs.reset");
    }
  }
});

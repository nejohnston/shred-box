import { Mongo } from "meteor/mongo";

export const Score = new Mongo.Collection("score");

if (Meteor.isServer) {
  Meteor.publish("score", function scorePublication() {
    return Score.find({});
  });
}

// const initScore = 3;

Meteor.methods({
  "score.updateScore"(){
    Score.find({score}, {$set:{score: }})
  },

  "score.updateLives"() {}
});

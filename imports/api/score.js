import { Mongo } from "meteor/mongo";

export const Score = new Mongo.Collection("score");

const updateScore = 0;
const lives = 3;

if (Meteor.isServer) {
  Meteor.publish("score", function scorePublication() {
    return Score.find({});
  });
}

// const initScore = 3;

Meteor.methods({
  "score.updateScore"(score) {
    Score.update({ id: 1 }, { $set: { score: score + 1 } });
  },

  "score.updateLives"() {}
});

// const score = 0;
// const lives = 3;
// Meteor.methods({
//   "score.updateScore"() {
//     score++;
//   },
//   "score.updateLives"() {
//     if (lives < 0) {
//       lives--;
//     } else {
//       Meteor.call("songs.reset");
//     }
//   }
// });

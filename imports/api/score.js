import { Mongo } from "meteor/mongo";

export const Score = new Mongo.Collection("score");

const updateScore = 0;
const lives = 3;

if (Meteor.isServer) {
  Meteor.publish("score", function scorePublication() {
    return Score.find({});
  });
}

Meteor.methods({
  "score.updateScore"() {
    if (score === 10) {
      alert;
    }
    // Streamy.broadcast(core);
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

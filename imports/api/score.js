import { Mongo } from "meteor/mongo";
import { Songs } from "./songs";
export const Score = new Mongo.Collection("score");

// const updateScore = 0;
// const lives = 3;

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
  "score.updateLives"(lives) {
    if (lives === 1) {
<<<<<<< HEAD
      Score.update({ id: 2 }, { $set: { lives: lives - 1 } });
      Streamy.broadcast("endgame", { data: { end: true } });
=======
      songsEnd();
      alert("end game");
>>>>>>> added an endgame alert into a method when lives hits 0
    } else {
      Score.update({ id: 2 }, { $set: { lives: lives - 1 } });
    }
  }
});

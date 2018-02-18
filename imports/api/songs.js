import { Mongo } from "meteor/mongo";
import { Score } from "./score";

export const Songs = new Mongo.Collection("songs");

if (Meteor.isServer) {
  Meteor.publish("songs", function songsPublication() {
    return Songs.find({});
  });
}

let interval;
let curr = 0;
let prev = curr;
let playedNotes = [];
let win = true;

let challenge = Songs.find().fetch();
let users = new ReactiveVar([]);

users.set(
  Meteor.users
    .find({})
    .fetch()
    .map(user => user._id)
);

const challengeArray = () => {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 4));
};

const songEnd = () => {
  curr = 0;
  playedNotes = [];
  Meteor.clearInterval(interval);
  win = true;
  users.set(
    Meteor.users
      .find({})
      .fetch()
      .map(user => user._id)
  );
};

Meteor.methods({
  "songs.createChallengeArray"() {
    if (!this.userId) {
      throw new Meteor.Error(
        "songs.not-authorized",
        "You must be logged in to play"
      );
    }
    //TODO: CHANGE TO DYNAMIC VAR
    const length = 20;

    if (Songs.find({}).count() !== 0) {
      Songs.remove({});
    }

    for (let i = 0; i < length; i++) {
      for (let k = 0; k < users.get().length; k++) {
        Songs.insert({ userid: users.get()[k], challenge: challengeArray() });
      }
    }
  },

  "songs.reset"() {
    Score.update({ id: 1 }, { $set: { score: 0 } });
    Score.update({ id: 2 }, { $set: { lives: 3 } });
    return songEnd();
  },

  "songs.start"() {
    challenge = Songs.find({}).fetch();
    const countdown = new ReactiveCountdown(3);
    // console.log("challenge", challenge);

    if (!this.isSimulation) {
      countdown.start(function() {
        interval = countdown.start(() => {
          playedNotes = [];
          win = true;
          if (challenge.length !== 0 && curr === challenge.length) {
            Streamy.broadcast("challenge", { data: { challenge: "Done!" } });
            return songEnd();
          }
          if (challenge.length) {
            Streamy.broadcast("challenge", { data: challenge[curr] });
          }
          prev = curr;
          curr++;
        }, 4000);
      });
    }
  }
});

Streamy.on("note", ({ data }) => {
  if (interval && playedNotes.length <= challenge[prev].challenge.length) {
    const currentChallenge = challenge[prev].challenge;

    if (playedNotes.length < currentChallenge.length) {
      playedNotes.push(data);
    }
    if (
      Number(playedNotes[playedNotes.length - 1]) !==
      Number(currentChallenge[playedNotes.length - 1])
    ) {
      win = false;
    }
    if (playedNotes.length === currentChallenge.length) {
      Streamy.broadcast("challenge-result", {
        data: win
      });
    }
  }
});

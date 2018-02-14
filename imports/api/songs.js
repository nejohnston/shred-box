import { Mongo } from "meteor/mongo";
import { gameInterval } from "./helpers.js";

export const Songs = new Mongo.Collection("songs");

if (Meteor.isServer) {
  Meteor.publish('songs', function songsPublication() {
    return Songs.find({});
  });
}

let interval;
let curr = 0;
let prev = curr;
let playedNotes = [];
let win = true;

const challenge = Songs.find({}).fetch();

const users = Meteor.users
  .find({})
  .fetch()
  .map(user => user._id);

const challengeArray = () => {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 4));
};

const songEnd = ()=>{
  console.log('Song is done....')
  curr = 0;
  playedNotes = [];
  Meteor.clearInterval(interval);
  win = true;
}


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

  },

  "songs.reset"(){
    songEnd();
  },

  "songs.start"(){
    interval = Meteor.setInterval(() => {
      playedNotes = [];
      win = true
      if(curr === challenge.length) { 
        Streamy.broadcast('challenge', { data: { challenge: 'Done!' }});
        return done(); 
      }
      Streamy.broadcast('challenge', { data: challenge[curr] });
      prev = curr;
      curr ++;
  }, 4000)
  }
});

Streamy.on('note', ({ data }) => {
  if(interval && playedNotes.length < challenge[prev].challenge.length) {
    const currentChallenge = challenge[prev].challenge;

    if(playedNotes.length < currentChallenge.length) {
      playedNotes.push(data)
    }

    if(Number(playedNotes[playedNotes.length-1]) !== Number(currentChallenge[playedNotes.length-1])) {
      win = false;
    }

    if(playedNotes.length === currentChallenge.length) {
      Streamy.broadcast('challenge-result', {
          data: win
       });
    }
  }
})


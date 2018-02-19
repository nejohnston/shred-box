import { Mongo } from 'meteor/mongo';
// import { Songs, songsEnd } from './songs';

export const Score = new Mongo.Collection('score');

// const updateScore = 0;
// const lives = 3;

if (Meteor.isServer) {
    Meteor.publish('score', () => Score.find({}));
}
// const initScore = 3;

Meteor.methods({
    'score.updateScore': function (score) {
        Score.update({ id: 1 }, { $set: { score: score + 1 } });
    },
    'score.updateLives': function (lives) {
        if (lives === 1) {
            Score.update({ id: 2 }, { $set: { lives: lives - 1 } });
            Streamy.broadcast('endgame', { data: { end: true } });
        } else {
            Score.update({ id: 2 }, { $set: { lives: lives - 1 } });
        }
    }
});

import { Mongo } from "meteor/mongo";

export const Players = new Mongo.Collection("players");

const users = Meteor.users
.find({})
.fetch()
.map(user => user._id);

export function randomArray(length, max) {
  return Array.apply(null, Array(length)).map(function() {
    return Math.round(Math.random() * max);
  });
}

Meteor.methods({
  "players.timeoutLoop"() {
    if (!this.userId) {
      // userId, freebie from meteor
      throw new Meteor.Error(
        //convention: collection name + method name + error name
        "players.timeourLoop.not-authorized",
        "You must log in to play!"
      );
    }
   
    users.map(userid => {
      // console.log(userid);
      // currUser = Players.find({_id: userid}).fetch();
      if (!this.isSimulation) {
        Meteor.setTimeout(function() {
          Players.update(
            { "user.userId": userid },
            { $set: { "user.turn": 1 } }
          );
        }, 1000);
      }
    });
  }
});

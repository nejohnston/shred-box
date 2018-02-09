import { Mongo } from "meteor/mongo";

export const Players = new Mongo.Collection("players");
// console.log(randomArray(4, 1));

function randomArray(length, max) {
  return Array.apply(null, Array(length)).map(function() {
    return Math.round(Math.random() * max);
  });
}

Meteor.methods({
  "players.timeoutLoop"(){
    if (!this.userId) {
      // userId, freebie from meteor
      throw new Meteor.Error(
        //convention: collection name + method name + error name
        "todos.addToDo.not-authorized",
        "You must log in to add todos"
      );
    }
    const users = Meteor.users.find({}).fetch().map(user=>user._id);
    // console.log(users);
    // Meteor.setTimeout(()=>{
    //   Players.update({})
    // }, 1000)
  }
})



import {
  Mongo
} from "meteor/mongo";

function randomArray(length, max) {
  return Array.apply(null, Array(length)).map(function () {
    return Math.round(Math.random() * max);
  });
}
console.log(randomArray(4, 1))
export const Players = new Mongo.Collection("players");
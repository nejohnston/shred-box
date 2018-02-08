import { Mongo } from "meteor/mongo";

export function randomArray(length, max) {
  return Array.apply(null, Array(length)).map(function() {
    return Math.round(Math.random() * max);
  });
}

export const Players = new Mongo.Collection("players");

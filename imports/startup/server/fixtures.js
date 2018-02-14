import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base"; //for add default user
import { Players } from "../../api/players";
import { Score } from "../../api/score";
import { Songs } from "../../api/songs";

Meteor.startup(() => {
  Score.insert({
    score: 3
  });
  if (Meteor.users.find().count() === 0) {
    let defaultUser = Accounts.createUser({
      email: "test@test.com",
      password: "password"
      // user: insertUser,
    });
    // console.log('first try', Players.find().fetch());
    
    Players.insert({
      user: { userId: defaultUser, turn: false }
    });
  }
  if (Songs.find({}).count()) {
    Songs.remove({});
  }
  if (Score.find({}).count()) {
    Score.remove({});
    Score.insert({
      score: 3
    });
  }

  // const users = Meteor.users
  //   .find({})
  //   .fetch()
  //   .map(user => user._id);
  // users.forEach(user => {
  //   Players.insert({
  //     user: { userId: user._id, turn: false }
  //   });
  // });
});

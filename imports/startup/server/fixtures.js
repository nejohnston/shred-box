import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base"; 
import { Score } from "../../api/score";
import { Songs } from "../../api/songs";

Meteor.startup(() => {
  if (Score.find({}).count()) {
    Score.remove({});
  } else {
    Score.insert({
      score: 0,
      lives: 3
    });
  }
  Score.insert({
    score: 0,
    lives: 3
  });
  if (Meteor.users.find().count() === 0) {
    let defaultUser = Accounts.createUser({
      email: "test@test.com",
      password: "password"
      // user: insertUser,
    });
    // console.log('first try', Players.find().fetch());

    // Players.insert({
    //   user: { userId: defaultUser, turn: false }
    // });
  }

  if (Songs.find({}).count()) {
    Songs.remove({});
  }

  if (Score.find({}).count()) {
    Score.remove({});
  }
  //  Score.insert({
  //       score: 3
  //     });
});

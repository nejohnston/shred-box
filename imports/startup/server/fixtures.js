import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base"; //for add default user
import { Players } from "../../api/players";
import { Score } from "../../api/score";
import { Songs } from "../../api/songs";

Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    let defaultUser = Accounts.createUser({
      email: "test@test.com",
      password: "password"
      // user: insertUser,
    });
    // console.log('first try', Players.find().fetch());
    Score.insert({
      score: 3
    });
    Players.insert({
      user: { userId: defaultUser, turn: false }
    });
  }

  if (Songs.find({}).count()) {
    Songs.remove({});
  }

  if (Score.find({}).count()) {
    Score.remove({});
   
  }
 Score.insert({
      score: 3
    });

});

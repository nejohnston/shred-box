import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base"; //for add default user
import { Players } from "../../api/players";

Meteor.startup(() => {

  if (Meteor.users.find().count() === 0) {
   
    let defaultUser = Accounts.createUser({
      email: "test@test.com",
      password: "password",
      // user: insertUser,
    });
// console.log('first try', Players.find().fetch());
  Players.insert({
    remainingLives: "3",
    users: [{ userId: defaultUser, turn: "0" }],
  }); 
  

  }

  console.log(Players.find().fetch());
  
  
});





 
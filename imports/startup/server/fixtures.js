import { Meteor } from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';//for add default user

Meteor.startup(() => {

  if (Meteor.users.find().count() ===0 ) {

    let defaultUser = Accounts.createUser({
      email: "test@test.com",
      password: "password"
    })
  }
});

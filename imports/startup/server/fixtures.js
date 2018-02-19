import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Score } from '../../api/score';
import { Songs } from '../../api/songs';

Meteor.startup(() => {
    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            email: 'test@test.com',
            password: 'password'
            // user: insertUser,
        });
    }

    if (Songs.find({}).count()) {
        Songs.remove({});
    }

    if (Score.find({}).count()) {
        Score.remove({});
    }

    Score.insert({
        id: 1,
        score: 0
    });
    Score.insert({
        id: 2,
        lives: 3
    });
});

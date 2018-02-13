import {Meteor} from 'meteor/meteor';
import {Promise} from 'meteor/promise';

export const gameInterval = song =>{
  return new Promise((error, resolve) => {
    if (error) reject(error)
    else{
      setTimeout(() => {
      resolve(song);
    }, 2000);
    }
    
  });
}
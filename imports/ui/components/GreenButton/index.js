import React from 'react';
import PropTypes from 'prop-types';

const greenClicked = (noteChoice, score, lives) => {
    if (lives !== 0) {
        if (noteChoice === 2) {
            const snd2 = new Audio('BlueHat.wav');
            snd2.play();
            Meteor.call('score.updateScore', score);
        } else {
            const errorsnd = new Audio('record-scratch.mp3');
            errorsnd.play();
            Meteor.call('score.updateLives', lives);
        }
    } else {
        Meteor.call('songs.reset');
    }
};

const GreenButton = ({ noteChoice, score, lives }) => (
    <div
        onClick={() => {
            greenClicked(noteChoice, score, lives);
        }}
        className="green-button"
    />
);

export default GreenButton;

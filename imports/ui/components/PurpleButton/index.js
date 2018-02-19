import React from 'react';
import PropTypes from 'prop-types';

const purpleClicked = (noteChoice, score, lives) => {
    if (lives !== 0) {
        if (noteChoice === 3) {
            const snd1 = new Audio('BaiscKick2.wav');
            snd1.play();
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

const PurpleButton = ({ noteChoice, score, lives }) => (
    <div
        onClick={() => {
            purpleClicked(noteChoice, score, lives);
        }}
        className="purple-button"
    />
);
export default PurpleButton;

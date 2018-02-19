import React from 'react';
import PropTypes from 'prop-types';

const redClicked = (noteChoice, score, lives) => {
    if (lives !== 0) {
        if (noteChoice === 0) {
            const snd = new Audio('ThunderKick.wav');
            snd.play();
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

const RedButton = ({ noteChoice, score, lives }) => (
    <div
        onClick={() => {
            redClicked(noteChoice, score, lives);
        }}
        className="red-button"
    />
);

export default RedButton;

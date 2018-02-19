import React from 'react';
import PropTypes from 'prop-types';

function ScoreBoard({ lives, score }) {
    return (
        <div className="scoreboard">
            <div className="score">Score : {score}</div>
            <div className="turn">Lives : {lives}</div>
        </div>
    );
}

export default ScoreBoard;

import React from 'react';
import PropTypes from 'prop-types';

function colorizeAnswer({ nextNote }) {
    if (nextNote === 0) {
        return <div className="red-answer" />;
    }
    if (nextNote === 1) {
        return <div className="blue-answer" />;
    }
    if (nextNote === 2) {
        return <div className="green-answer" />;
    }
    if (nextNote === 3) {
        return <div className="purple-answer" />;
    }
    return <div>*</div>;
}

const NextUpDisplay = ({ nextNote }) => colorizeAnswer({ nextNote });
export default NextUpDisplay;

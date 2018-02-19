import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Template } from 'meteor/templating';
// import { Blaze } from 'meteor/blaze';

export default class Instructions extends Component {
    render() {
        return (
            <div>
                <h1>Instructions:</h1>
                <p> 1. Press start to play </p>
                <p>
                    2. When the coloured circles appear click the correct
                    sequence of circles from left to right
                </p>
                <p> 3. If there are more players, wait for your turn </p>
                <p>4. Repeat until you run out of lives</p>
            </div>
        );
    }
}

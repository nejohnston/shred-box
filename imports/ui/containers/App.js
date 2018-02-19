import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { Score } from '../../api/score';
import { Songs } from '../../api/songs';

import BlueButton from '../components/BlueButton';
import GreenButton from '../components/GreenButton';
import PurpleButton from '../components/PurpleButton';
import RedButton from '../components/RedButton';
import NextUpDisplay from '../components/NextUpDisplay';
import Login from '../components/Login/Login';
import ScoreBoard from '../components/ScoreBoard';
import './styles.css';

const turn = 0;
const challengeResult = new ReactiveVar('');

Session.set('started', false);
// Streamy.on('endgame', (d) => {
//     console.log(d.data.end);
// });
Streamy.on('challenge-result', (d, s) => {
    challengeResult.set(d.data);
    Meteor.setTimeout(() => {
        challengeResult.set('');
    }, 1500);
});

class App extends Component {
    constructor() {
        super();
        this.state = {
            turn: 0,
            challenge: [],
            end: false
        };
        Streamy.on('endgame', (d, s) => {
            if (d.data.end) {
                this.setState({ end: true });
            } else {
                this.setState({ end: false });
            }
        });
        Streamy.on('challenge', (d, s) => {
            if (d.data.userid === this.props.currentUserId) {
                this.setState({ turn: 0, challenge: d.data.challenge });
            } else {
                this.setState({ challenge: [] });
            }
        });
    }
    drum1 = () => {
        drum1 = new Audio('drum-loop.mp3');
        drum1.play();
    };

    drum2 = () => {
        drum2 = new Audio('drum-loop2.mp3');
        drum2.play();
    };

    synth1 = () => {
        synth1 = new Audio('synth-loop.mp3');
        synth1.play();
    };

    synth2 = () => {
        synth2 = new Audio('synth-loop2.mp3');
        synth2.play();
    };
    buttonClicked = id => {
        if (Session.get('started')) {
            console.log('Button to emit: ', id);
            Streamy.emit('note', { data: id });
        }
    };
    startClicked = e => {
        this.resetClicked();
        Session.set('started', true);
        Meteor.call('songs.createChallengeArray');
        Meteor.call('songs.start');
        this.drum1();
    };
    resetClicked = e => {
        Session.set('started', false);
        Meteor.call('songs.reset');
        this.setState({ turn: 0 });
        this.setState({ challenge: [] });
        this.drum2();
        this.setState({ end: false });
    };
    turnUp = () => {
        if (this.state.turn > 2) {
            const restartTurn = 0;
            this.setState({ turn: restartTurn });
        } else {
            const nextTurn = this.state.turn + 1;
            this.setState({ turn: nextTurn });
        }
    };
    onClick = (id, turn) => {
        this.buttonClicked(id);
        this.turnUp(turn);
    };

    render() {
        if (this.state.end) {
            buttons = (
                <div className="lose-screen">
                    You lost! Your score is {this.props.score[0].score}
                </div>
            );

            display = <div />;
        } else {
            display = (
                <div className="answer-box">
                    <NextUpDisplay nextNote={this.state.challenge[0]} />
                    <NextUpDisplay nextNote={this.state.challenge[1]} />
                    <NextUpDisplay nextNote={this.state.challenge[2]} />
                    <NextUpDisplay nextNote={this.state.challenge[3]} />
                </div>
            );
            if (this.state.challenge.length) {
                buttons = (
                    <div className="bottom-wrapper">
                        <div
                            className="red-div"
                            onClick={() => {
                                this.onClick(0, turn);
                            }}
                        >
                            <RedButton
                                id={0}
                                noteChoice={
                                    this.state.challenge[this.state.turn]
                                }
                                score={this.props.score[0].score}
                                lives={this.props.lives[0].lives}
                            />
                        </div>

                        <div
                            className="blue-div"
                            onClick={() => {
                                this.onClick(1, turn);
                            }}
                        >
                            <BlueButton
                                id={1}
                                noteChoice={
                                    this.state.challenge[this.state.turn]
                                }
                                score={this.props.score[0].score}
                                lives={this.props.lives[0].lives}
                            />
                        </div>

                        <div
                            className="green-div"
                            onClick={() => {
                                this.onClick(2, turn);
                            }}
                        >
                            <GreenButton
                                id={2}
                                noteChoice={
                                    this.state.challenge[this.state.turn]
                                }
                                score={this.props.score[0].score}
                                lives={this.props.lives[0].lives}
                            />
                        </div>

                        <div
                            className="purple-div"
                            onClick={() => {
                                this.onClick(3, turn);
                            }}
                        >
                            <PurpleButton
                                id={3}
                                noteChoice={
                                    this.state.challenge[this.state.turn]
                                }
                                score={this.props.score[0].score}
                                lives={this.props.lives[0].lives}
                            />
                        </div>
                    </div>
                );
            } else if (this.state.challenge.length) {
                buttons = (
                    <div className="bottom-wrapper">
                        <div
                            className="red-div"
                            onClick={() => {
                                this.onClick(0, turn);
                            }}
                        >
                            <RedButton
                                id={0}
                                noteChoice={
                                    this.state.challenge[this.state.turn]
                                }
                                score={this.props.score[0].score}
                                lives={this.props.lives[0].lives}
                            />
                        </div>

                        <div
                            className="blue-div"
                            onClick={() => {
                                this.onClick(1, turn);
                            }}
                        >
                            <BlueButton
                                id={1}
                                noteChoice={
                                    this.state.challenge[this.state.turn]
                                }
                                score={this.props.score[0].score}
                                lives={this.props.lives[0].lives}
                            />
                        </div>

                        <div
                            className="green-div"
                            onClick={() => {
                                this.onClick(2, turn);
                            }}
                        >
                            <GreenButton
                                id={2}
                                noteChoice={
                                    this.state.challenge[this.state.turn]
                                }
                                score={this.props.score[0].score}
                                lives={this.props.lives[0].lives}
                            />
                        </div>
                        <div
                            className="purple-div"
                            onClick={() => {
                                this.onClick(3, turn);
                            }}
                        >
                            <PurpleButton
                                id={3}
                                noteChoice={
                                    this.state.challenge[this.state.turn]
                                }
                                score={this.props.score[0].score}
                                lives={this.props.lives[0].lives}
                            />
                        </div>
                    </div>
                );
            } else {
                buttons = <div className="bottom-wrapper" />;
            }
            if (this.state.challenge.length) {
                logo = <div />;
            } else {
                logo = (
                    <img
                        className="logo"
                        src="./logo.png"
                        alt="shredbox logo"
                    />
                );
            }
        }

        return (
            <div className="background">
                <div className="app-wrapper">
                    <div className="login-wrapper">
                        <Login />
                    </div>

                    <div className="button-wrapper">
                        {/* <div className="login-wrapper">
              <Login />
            </div> */}
                        <button
                            className="start-button"
                            onClick={() => {
                                this.startClicked();
                            }}
                        >
                            Start
                        </button>

                        <button
                            className="reset-button"
                            onClick={() => {
                                this.resetClicked();
                            }}
                        >
                            Stop
                        </button>
                    </div>

                    <div className="input-wrapper">
                        <div className="top-wrapper">
                            <div className="top-left-header">
                                {logo}
                                {display}
                            </div>

                            <div className="top-right-header">
                                {this.props.score.length ? (
                                    <ScoreBoard
                                        lives={this.props.lives[0].lives}
                                        score={this.props.score[0].score}
                                    />
                                ) : (
                                    <ScoreBoard lives={0} score={0} />
                                )}
                            </div>
                        </div>
                        {buttons}
                    </div>
                </div>
            </div>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('songs');
    Meteor.subscribe('score');
    return {
        currentUser: Meteor.user(),
        currentUserId: Meteor.userId(),
        score: Score.find({ id: 1 }).fetch(),
        lives: Score.find({ id: 2 }).fetch(),
        songs: Songs.find({}).fetch()
    };
})(App);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import './styles.css';

import { Players } from '../../api/players';

import { Meteor } from 'meteor/meteor';
import BlueButton from '../components/BlueButton';
import GreenButton from '../components/GreenButton';
import PurpleButton from '../components/PurpleButton';
import RedButton from '../components/RedButton';

import AccountsWrapper from '../components/AccountsWrapper';

class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="input-wrapper">
				<div className="top-wrapper">
					<div className="top-left">COMING UP: (icon) (icon) (icon) (icon)</div>
					<div className="top-right">SCORE : 1/12 </div>
				</div>
				<div className="bottom-wrapper">
					<div className="div1">
						<RedButton />
					</div>

					<div className="div2">
						<BlueButton />
					</div>

					<div className="div3">
						<div className="green-button" />
					</div>
					<div className="div4">
						<div className="purple-button" />
					</div>
				</div>
			</div>
		);
	}
}

export default withTracker(() => {
	return {
		currentUser: Meteor.user(),
		currentUserId: Meteor.userId(),
		players: Players.find({}).fetch()
	};
})(App);

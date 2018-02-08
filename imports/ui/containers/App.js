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
import NextUpDisplay from "../components/NextUpDisplay"
import AccountsWrapper from '../components/AccountsWrapper';



class App extends Component {
	constructor() {
		super();
	}

	render() {
    const randomArray = (length, max) => {
      return Array.apply(null, Array(length)).map(function () {
        return Math.round(Math.random() * max);
      });
    }
    let turn = 0;
    let array = randomArray(4,3);
    let answer = array[0 + turn];
    
    console.log(answer)
		return (  
      
			<div className="input-wrapper">
				<div className="top-wrapper">
					<div className="top-left">
            <NextUpDisplay answer={answer} turn={turn}/>
          </div>
					<div className="top-right">SCORE : 1/12 </div>
				</div>
				<div className="bottom-wrapper">
					<div className="div1">
						<RedButton answer={answer} turn={turn}/>
					</div>

					<div className="div2">
						<BlueButton answer={answer}/>
					</div>

					<div className="div3">
						<GreenButton answer={answer}/>
					</div>
					<div className="div4">
						<PurpleButton answer={answer} />
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

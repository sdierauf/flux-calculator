/** @jsx React.DOM */

var React = require('react');


var Display = require('./Display.react');
var NumPad = require('./NumPad.react');
var PushButton = require('./PushButton.react');
var Mutators = require('./Mutators.react');
var StackDisplay = require('./StackDisplay.react');
var CalcStore = require('../stores/CalcStore');

function getCalcState() {
	return {
		result: CalcStore.getResult(),
		stack : CalcStore.getStack()
	}
}


var CalcApp = React.createClass({

	//need access to stack of numbers

	getInitialState: function() {
		return getCalcState();
	},

	componentDidMount: function() {
		CalcStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		CalcStore.removeChangeListener(this._onChange);
	},

	render: function() {
		return (
			<div>
				<Display 
					result={this.state.result} />
				<NumPad />
				<PushButton />
				<Mutators />
				<StackDisplay 
					stack={this.state.stack} />
			</div>

		);
	},

	_onChange: function() {
		this.setState(getCalcState());
	}
});

module.exports = CalcApp;
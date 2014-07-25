/** @jsx React.DOM */

var React = require('react');


var Display = require('./Display.react');
var Input = require('./Input.react.js');
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
			<div id="calculator">
				<StackDisplay 
					stack={this.state.stack} />
				<Display 
					output={this.state.result} />
				<Input />
				<PushButton />
				<Mutators />
			</div>

		);
	},

	_onChange: function() {
		this.setState(getCalcState());
	}
});

module.exports = CalcApp;
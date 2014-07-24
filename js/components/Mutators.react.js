/** @jsx React.DOM */

var React = require('react');
var CalcActions = require('../actions/CalcActions');

var Mutators = React.createClass({

	render: function() {

		return (
			<div id="mutators">
				<input 
					type="button"
					value="+"
					onClick={this._onPlusClick} />
				<input
					type="button"
					value="-"
					onClick={this._onMinusClick} />
				<input
					type="button"
					value="x"
					onClick={this._onMultiplyClick} />
				<input
					type="button"
					value="/"
					onClick={this._onDivideClick} />
			</div>
		);
	},

	_onPlusClick: function() {
		CalcActions.doMath('+');
	},

	_onMinusClick: function() {
		CalcActions.doMath('-');
	},

	_onMultiplyClick: function() {
		CalcActions.doMath('*');
	},

	_onDivideClick: function() {
		CalcActions.doMath('/');
	}
});

module.exports = Mutators;
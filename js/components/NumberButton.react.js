/** @jsx React.DOM */

var React = require('react');
var CalcActions = require('../actions/CalcActions');


var NumberButton = React.createClass({

	// propTypes: {
	// 	number: React.PropTypes.int.isRequired
	// },

	render: function() {
		var number = this.props.number;

		return (
			<input
				type="button"
				value={number}
				onClick={this._onNumberClick} />
		);
	},

	_onNumberClick: function() {
		CalcActions.addToDisplay(this.props.number);
	}

});

module.exports = NumberButton;
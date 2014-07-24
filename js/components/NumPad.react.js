/** @jsx React.DOM */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var CalcActions = require('../actions/CalcActions');
var NumberButton = require('./NumberButton.react.js');

var NumPad = React.createClass({


	render: function() {

		var buttons = [];

		for (var i = 9; i > 0; i--) {
			buttons.push(<NumberButton number={i} />);
		};

		return (
			<section id="numpad">{buttons}</section>
		);

	}
});

module.exports = NumPad;

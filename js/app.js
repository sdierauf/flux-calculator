/** @jsx React.DOM */

var React = require('react');

var CalcApp = require('./components/CalcApp.react');

React.renderComponent(
	<CalcApp />,
	document.getElementById('calcapp')
);
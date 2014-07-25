/** @jsx React.DOM */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var CalcActions = require('../actions/CalcActions');

var Display = React.createClass( {

	render: function() {

		return (
			<div id="display">
				<p>Output: {this.props.output} </p>
			</div>
		);
	}
});


module.exports = Display;
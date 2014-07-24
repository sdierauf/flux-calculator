/** @jsx React.DOM */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var CalcActions = require('../actions/CalcActions');

var Display = React.createClass({

	// propTypes: {
	// 	result: ReactPropTypes.double.isRequired
	// },

	render: function() {

		return (
			<input
				id="result-display"
				type="text"
				value={this.props.result} />
		)
	}

});

module.exports = Display;

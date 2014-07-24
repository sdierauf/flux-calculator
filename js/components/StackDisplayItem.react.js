/** @jsx React.DOM */

var React = require('react');

var StackDisplayItem = React.createClass({

	// propTypes:  {
	// 	number: React.PropTypes.int.isRequired
	// },

	render: function() {
		return (
			<li>
				<label>{this.props.stackItem.number}</label>
			</li>
		);
	}
});

module.exports = StackDisplayItem;
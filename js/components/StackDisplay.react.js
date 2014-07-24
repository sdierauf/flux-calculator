/** @jsx React.DOM */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var StackDisplayItem = require('./StackDisplayItem.react');

var StackDisplay = React.createClass({
	propTypes: {
		stack: React.PropTypes.object.isRequired
	},

	render: function() {
		var stack = this.props.stack;
		var stackNums = [];

		// for (var i = stack.length - 1; i >= 0; i--) {
		// 	stackNums.push(<StackDisplayItem stackItem={stack[i]} />);
		// };

		for (var key in stack) {
			console.log('building stack display');
			console.log(stack[key])
			stackNums.push(<StackDisplayItem stackItem={stack[key]} />)
		}

		return (
			<ul>{stackNums}</ul>
		);

	}
});

module.exports = StackDisplay;
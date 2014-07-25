/** @jsx React.DOM */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var CalcActions = require('../actions/CalcActions');

var ENTER_KEY_CODE = 13;

var Display = React.createClass({

	// propTypes: {
	// 	result: ReactPropTypes.double.isRequired
	// },

	getInitialState: function() {
		return {
			value: ''
		}
	},

	render: function() {

		return (
			<input
				id="input"
				type="text"
				value={this.state.value}
				onKeyDown={this._onKeyDown}
				autofocus={true}
				onChange={this._onChange} />
		);
	},

	_onKeyDown: function(event) {
		//console.log(this.state.result);
		if (event.keyCode === ENTER_KEY_CODE) {
			CalcActions.pushResultOnStack(this.state.value);
			this.state.value = '';
		};
	},

	_onChange: function(event) {
		this.setState({
			value: event.target.value
		});
	},


});

module.exports = Display;

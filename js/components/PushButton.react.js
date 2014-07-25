/** @jsx React.DOM */

var React = require('react');
var CalcActions = require('../actions/CalcActions');

var PushButton = React.createClass({

	render: function() {

		return(
			<div>
				<input 
					type="button"
					value="Enter"
					onClick={this._onPushClick} />
			</div>
		);

	},

	_onPushClick: function() {
		CalcActions.pushResultOnStack();
		CalcActions.clearResult();
	},

	_onClearClick: function() {
		console.log('onclearclick clicked');
		CalcActions.clearResult();
	}

});

module.exports = PushButton;
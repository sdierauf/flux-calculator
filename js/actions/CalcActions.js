var CalcDispatcher = require('../dispatcher/CalcDispatcher');
var CalcConstants = require('../constants/CalcConstants');

var CalcActions = {

	pushNumOnStack: function(number) {
		CalcDispatcher.handleViewAction({
			actionType: CalcConstants.PUSH_NUM,
			number: number
		});
	},

	addToDisplay: function(number) {
		CalcDispatcher.handleViewAction({
			actionType: CalcConstants.ADD_TO_DISPLAY,
			number: number
		});
	},

	pushResultOnStack: function(result) {
		CalcDispatcher.handleViewAction({
			actionType: CalcConstants.PUSH_RESULT,
			result: result
		});
	},

	clearResult: function() {
		CalcDispatcher.handleViewAction({
			actionType: CalcConstants.CLEAR_RESULT
		});
	},

	doMath: function(operator) {
		CalcDispatcher.handleViewAction({
			actionType: CalcConstants.DO_MATH,
			operator: operator
		});
	},

	editResult: function(keyCode) {
		CalcDispatcher.handleViewAction({
			actionType: CalcConstants.EDIT_RESULT,
			keyCode: keyCode
		});
	}


};

module.exports = CalcActions;

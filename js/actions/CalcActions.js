var CalcDispatcher = require('../dispatcher/CalcDispatcher');
var CalcConstants = require('../constants/CalcConstants');

var CalcActions = {

	pushResultOnStack: function(result) {
		CalcDispatcher.handleViewAction({
			actionType: CalcConstants.PUSH_RESULT,
			result: result
		});
	},

	doMath: function(operator) {
		CalcDispatcher.handleViewAction({
			actionType: CalcConstants.DO_MATH,
			operator: operator
		});
	},
	
};

module.exports = CalcActions;

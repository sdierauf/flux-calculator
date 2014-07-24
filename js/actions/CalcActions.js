var CalcDispatcher = require('../dispatcher/CalcDispatcher');
var CalcConstants = require('../constants/CalcConstants');

var CalcActions = {

	pushNumOnStack: function(number) {
		CalcDispatcher.handleViewAction({
			actionType: CalcConstants.PUSH_NUM,
			number: number
		});
	}

};

module.exports = CalcActions;

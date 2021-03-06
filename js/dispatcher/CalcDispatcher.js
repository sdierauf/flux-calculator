var Dispatcher = require('./Dispatcher');
var merge = require('react/lib/merge');

var CalcDispatcher = merge(Dispatcher.prototype, {
	handleViewAction: function(action) {
		this.dispatch( {
			source: 'VIEW_ACTIONS',
			action: action
		});
	}

});

module.exports = CalcDispatcher;
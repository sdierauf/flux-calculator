var CalcDispatcher = require('../dispatcher/CalcDispatcher');
var EventEmitter = require('events').EventEmitter;
var CalcConstants = require('../constants/CalcConstants');
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var _stack = {};
var _result = 0;

function pushNum(number) {
	var key = Date.now();
	_stack[key] = {
		number: number
	};
}

function popNum() {

}

var CalcStore = merge(EventEmitter.prototype,  {

	getStack : function() {
		return _stack;
	},

	getResult: function() {
		return _result;
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback)  {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

});


CalcDispatcher.register(function(payload) {

	var action = payload.action;
	console.log(action);
	var number;

	console.log(action.actionType);

	switch(action.actionType) {

		case CalcConstants.PUSH_NUM:
			number = action.number;
			console.log('pushing a number to the stack ' + number);
			pushNum(number);
			break;


		default: 
			console.log('fell through to default');
	};

	CalcStore.emitChange();

	return true;

});

module.exports = CalcStore;



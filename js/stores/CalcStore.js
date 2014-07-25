var CalcDispatcher = require('../dispatcher/CalcDispatcher');
var EventEmitter = require('events').EventEmitter;
var CalcConstants = require('../constants/CalcConstants');
var merge = require('react/lib/merge');

var CHANGE_EVENT = 'change';

var _stack = [];
var _result = '';

function pushNum(result) {
	var number = parseFloat(result);
	var id = Date.now();
	if (number) {
		_stack.push({
			key: id,
			number: number
		});
	}	
}

function pushResult() {
	var id = Date.now();
	_stack.push({
		key: id,
		number: _result
	});
}

function setResult(keyCode) {
	_result = keyCode;
}

function appendToResult(number) {
	_result = _result * 10 + number;
}

function doMath(op) {
	var stackTop = _stack.pop();
	if (typeof stackTop == 'undefined') {
		_result = _result;
		return;
	}

	if (!parseFloat(_result)) {
		_result = stackTop.number;
		return;
	}
	// console.log(stackTop)
	// _result = stackTop.number;
	switch(op) {

		case '+':
			_result = _result + stackTop.number;
			break;

		case '-':
			_result = _result - stackTop.number;
			break;

		case '*':
			_result = _result * stackTop.number;
			break;

		case '/' :
			_result = _result / stackTop.number;
			break;

		default:
			_result = 0;
	};

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

		case CalcConstants.ADD_TO_DISPLAY:
			number = action.number
			console.log('adding nubmer to display ' + number);
			appendToResult(number);
			break;

		case CalcConstants.PUSH_RESULT:
			pushNum(action.result);
			break;

		case CalcConstants.CLEAR_RESULT:
			console.log('cleared!');
			clearResult();
			break;

		case CalcConstants.DO_MATH: 
			doMath(action.operator);
			break;

		case CalcConstants.EDIT_RESULT:
			setResult(action.keyCode);
			break;

		default: 
			console.log('fell through to default');
	};

	CalcStore.emitChange();

	return true;

});

module.exports = CalcStore;



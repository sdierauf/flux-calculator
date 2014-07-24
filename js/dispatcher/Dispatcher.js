var Promise = require('es6-promise').Promise;
var merge = require('react/lib/merge');

var _callbacks = [];
var _promises = [];

var _addPromise = function(callback, payload) {
	_promises.push(new Promise(function(resolve, reject) {
		if (callback(payload)) {
			resolve(payload);
		} else {
			reject(new Error('dispatcher callback didnt go so well D:'));
		}
	}));
};

var Dispatcher = function() {};
Dispatcher.prototype = merge(Dispatcher.prototype, {

	register: function(callback) {
		_callbacks.push(callback);
		return _callbacks.length - 1;
	},

	dispatch: function(payload) {
		var resolves = [];
		var promises = [];

		_promises = _callbacks.map(function(_, i) {
			return new Promise(function(resolve, reject) {
				resolves[i] = resolve;
				rejects[i] = reject;
			});
		});

		_callbacks.forEach(function(callback, i) {
			Promise.resolve(callback(payload)).then(function() {
				resolves[i](payload);
			}, function() {
				rejects[i](new Error('Dispatcher callback unsuccessful'));
			});
		});
	},

	waitFor: function(promiseIndexes, callback) {
		var selectedPromises = promiseIndexes.map(function(index) {
			return _promises[index];
		});
		return Promise.all(selectedPromises).then(callback);
	}
});

module.exports = Dispatcher;

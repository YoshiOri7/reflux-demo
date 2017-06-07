// Library and Framework
var Reflux = require('reflux');

// Setup reflux to use bluebird for promises
Reflux.setPromise(require('bluebird'));

// Import APIs
var HomeApi = require('../apis/HomeApi');

// Create Actions
var HomeListentoActions = Reflux.createActions({
  initialize: {},
  click: {},
  fetchResolve: { sync: true, asyncResult: true },
  fetchReject: { sync: true, asyncResult: true }
});

HomeListentoActions.fetchResolve.listenAndPromise(HomeApi.fetchResolve);
HomeListentoActions.fetchReject.listenAndPromise(HomeApi.fetchReject);

module.exports = HomeListentoActions;

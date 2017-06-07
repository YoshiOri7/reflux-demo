var HomeConnectActions = require('../actions/HomeConnectActions.js');
var Reflux = require('reflux');

var HomeConnectStore = Reflux.createStore({
  listenables: [HomeConnectActions],

  HomeStoreState: {
    messages: [{ message: 'hello' }, { message: 'hi' }],
    fetching: false,
    error: false,
    click: false
  },

  init: function() {
    // HomeConnectActions.initialize();
  },

  onInitialize: function() {
    console.log('onInitialize from HomeConnectStore');
    this.trigger(this.HomeStoreState);
  },

  onClick: function() {
    console.log('onClick from HomeConnectStore');
    this.HomeStoreState.click = true;
    console.log(this.HomeStoreState);
    this.trigger(this.HomeStoreState);
  },

  // =================================
  onFetchResolve: function() {
    console.log('onFetchResolve from HomeConnectStore');
    this.HomeStoreState.fetching = true;

    this.trigger(this.HomeStoreState);
  },

  onFetchResolveCompleted: function(messages) {
    console.log('onFetchResolveCompleted from HomeConnectStore');
    this.HomeStoreState.messages = messages;

    this.trigger(this.HomeStoreState);
  },

  onFetchResolveFailed: function(error) {
    console.log('onFetchFailed from HomeConnectStore');
    this.HomeStoreState.messages = [];
    this.HomeStoreState.error = error;

    this.trigger(this.HomeStoreState);
  },

  // =================================
  onFetchReject: function() {
    console.log('onFetchReject from HomeConnectStore');
    this.HomeStoreState.fetching = true;

    this.trigger(this.HomeStoreState);
  },

  onFetchRejectCompleted: function(messages) {
    console.log('onFetchRejectCompleted from HomeConnectStore');
    this.HomeStoreState.messages = messages;

    this.trigger(this.HomeStoreState);
  },

  onFetchRejectFailed: function(error) {
    console.log('onFetchRejectFailed from HomeConnectStore');
    this.HomeStoreState.messages = [];
    this.HomeStoreState.error = error;

    this.trigger(this.HomeStoreState);
  }
});

module.exports = HomeConnectStore;

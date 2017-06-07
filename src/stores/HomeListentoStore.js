var HomeListentoActions = require('../actions/HomeListentoActions.js');
var Reflux = require('reflux');

var HomeListentoStore = Reflux.createStore({
  listenables: [HomeListentoActions],

  init: function() {
    HomeListentoActions.initialize();
  },

  onInitialize: function() {
    // some initialization
    console.log('onInitialize from HomeListenToStore');
  },

  // ======================
  onClick: function() {
    console.log('onClick from HomeListentoStore');
    this.trigger({
      type: 'click',
      click: true
    });
  },

  // ======================
  onFetchResolve: function() {
    console.log('onFetchResolve from HomeListentoStore');
    this.trigger({
      type: 'fetching',
      fetching: true
    });
  },

  onFetchResolveCompleted: function(messages) {
    console.log('onFetchResolveCompleted from HomeListentoStore');
    this.trigger({
      type: 'messages',
      messages: messages
    });
  },

  onFetchResolveFailed: function(error) {
    console.log('onFetchResolveFailed from HomeListentoStore');
    this.trigger({
      type: 'error',
      error: error
    });
  },

  // ======================
  onFetchReject: function() {
    console.log('onFetchReject from HomeListentoStore');
    this.trigger({
      type: 'fetching',
      fetching: true
    });
  },

  onFetchRejectCompleted: function(messages) {
    console.log('onFetchRejectCompleted from HomeListentoStore');
    this.trigger({
      type: 'messages',
      messages: messages
    });
  },

  onFetchRejectFailed: function(error) {
    console.log('onFetchRejectFailed from HomeListentoStore');
    this.trigger({
      type: 'error',
      error: error
    });
  }
});

module.exports = HomeListentoStore;

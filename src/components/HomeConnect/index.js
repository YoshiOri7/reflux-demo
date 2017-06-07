// Library and Framework
var React = require('react/addons');
var Reflux = require('reflux');

// Actions
var HomeConnectActions = require('../../actions/HomeConnectActions.js');

// Stores
var HomeConnectStore = require('../../stores/HomeConnectStore.js');

// createClass
var HomeConnect = React.createClass({
  mixins: [Reflux.connect(HomeConnectStore, 'HomeStoreState')],

  getInitialState: function() {
    return {
      HomeStoreState: {
        messages: [{ message: 'hello' }, { message: 'hi' }],
        fetching: false,
        error: false,
        click: false
      }
    };
  },

  render: function() {
    console.log('===========');
    console.log(this.state);
    console.log('===========');

    const errorEl = () => {
      if (this.state.HomeStoreState.error)
        return <div style={{ color: 'red' }}>{this.state.HomeStoreState.error.message}</div>;

      return null;
    };

    const messagesEl = () => {
      return this.state.HomeStoreState.messages.map(function(item) {
        return <div>{item.message}</div>;
      });
    };

    return (
      <div className="Home">
        <h3 style={{ color: 'blue' }}>Home</h3>
        {errorEl()}
        {messagesEl()}
        <button onClick={HomeConnectActions.click}>Click</button>
        <button onClick={HomeConnectActions.fetchResolve}>FetchResolve</button>
        <button onClick={HomeConnectActions.fetchReject}>FetchReject</button>
      </div>
    );
  }
});

module.exports = HomeConnect;

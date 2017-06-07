// Library and Framework
var React = require('react/addons');
var Reflux = require('reflux');

// Actions
var HomeListentoActions = require('../../actions/HomeListentoActions.js');

// Stores
var HomeListentoStore = require('../../stores/HomeListentoStore.js');

// createClass
var HomeListento = React.createClass({
  mixins: [Reflux.listenTo(HomeListentoStore, 'onHomeStoreChange')],

  onHomeStoreChange: function(data) {
    if (data.type === 'click') return this.setState({ click: data.click });

    if (data.type === 'fetching') return this.setState({ fetching: data.fetching });

    if (data.type === 'messages') return this.setState({ messages: data.messages });

    if (data.type === 'error') return this.setState({ error: data.error, messages: [] });
  },

  getInitialState: function() {
    return {
      messages: [{ message: 'hello' }, { message: 'hi' }],
      fetching: false,
      error: false,
      click: false
    };
  },

  render: function() {
    console.log('===========');
    console.log(this.state);
    console.log('===========');

    const errorEl = () => {
      if (this.state.error) return <div style={{ color: 'red' }}>{this.state.error.message}</div>;

      return null;
    };

    const messagesEl = () => {
      return this.state.messages.map(function(item) {
        return <div>{item.message}</div>;
      });
    };

    return (
      <div className="Home">
        <h3 style={{ color: 'blue' }}>ListenToStore</h3>
        {errorEl()}
        {messagesEl()}
        <button onClick={HomeListentoActions.click}>Click</button>
        <button onClick={HomeListentoActions.fetchResolve}>FetchResolve</button>
        <button onClick={HomeListentoActions.fetchReject}>FetchReject</button>
      </div>
    );
  }
});

module.exports = HomeListento;

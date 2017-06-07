// ===========================================
// Library and Framework
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

// Containers/Components
var App = require('./components/App');
var HomeConnect = require('./components/HomeConnect');
var HomeListento = require('./components/HomeListento');

var rootEl = document.getElementById('root');

// The routes
var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="connect" path="connect" handler={HomeConnect} />
    <Route name="listento" path="listento" handler={HomeListento} />
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler />, rootEl);
});

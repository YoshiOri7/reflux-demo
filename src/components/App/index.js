var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          <li> <Link to="connect"> connectToStore </Link></li>
          <li> <Link to="listento"> listenToStore </Link></li>
        </ul>

        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;

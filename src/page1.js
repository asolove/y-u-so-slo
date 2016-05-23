var React = require("react");
var log = require("./lib").log;

var Page1 = React.createClass({
  render: function() {
    log("Rendering");
    return React.DOM.div();
  }
});

React.render(Page1, document.body);

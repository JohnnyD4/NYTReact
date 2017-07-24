// Include React
var React = require("react");

var GrandChild2 = React.createClass({

  // Here we render the component
  render: function() {

    return (
    	<div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">GrandChild #2</h3>
              </div>
              <div className="panel-body">
                <p>GrandChild2</p>
              </div>
        </div>
    )
   }
});

module.exports = GrandChild2;
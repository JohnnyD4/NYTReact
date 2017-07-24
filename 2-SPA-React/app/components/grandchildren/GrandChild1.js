// Include React
var React = require("react");

var GrandChild1 = React.createClass({

  // Here we render the component
  render: function() {

    return (
    	<div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">GrandChild #1</h3>
              </div>
              <div className="panel-body">
                <p>GrandChild1</p>
              </div>
        </div>
    )
   }
});

module.exports = GrandChild1;
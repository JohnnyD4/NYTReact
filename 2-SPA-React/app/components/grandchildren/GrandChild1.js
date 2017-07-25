// Include React
var React = require("react");

var GrandChild1 = React.createClass({

  // Here we render the component
  render: function() {

    return (
    	<div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">Results</h3>
              </div>
              <div className="panel-body">
                <div className="contentDiv">
                    <h1>{this.props.topicSearch}</h1>
                </div>
              </div>
        </div>
    )
   }
});

module.exports = GrandChild1;
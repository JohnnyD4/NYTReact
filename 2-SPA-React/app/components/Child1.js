// Include React
var React = require("react");

var Link = require("react-router").Link;

var Child1 = React.createClass({

  // Here we render the component
  render: function() {

    return (

    <div className="row">
      
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Child #1</h3>
          </div>
          <div className="panel-body">
  
            <p>
              <Link to="/Child1/GrandChild1"><button className="btn btn-warning btn-sm">Show GrandChild #1</button></Link>
              <Link to="/Child1/GrandChild2"><button className="btn btn-success btn-sm">Show GrandChild #2</button></Link>
            </p>  

            <div>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
});

module.exports = Child1;


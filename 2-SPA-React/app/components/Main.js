// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  // Here we render the component
  render: function() {

    return (
      <div className="container">

        <div className="row">

          <div className="jumbotron">
            <h1>React Router</h1>
            <p><em>Children</em></p>
            
            <Link to="/Child1"><button className="btn btn-default">Search</button></Link>
            <Link to="/Child2"><button className="btn brn-success">Saved</button></Link>
          </div>

          <div className="container">

            {/* Added this.props.children to dump all of the child components into place */}
            {this.props.children}

          </div>
        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;

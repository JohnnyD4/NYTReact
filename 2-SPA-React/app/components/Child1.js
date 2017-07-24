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
              {/*<form method="post" action="/search">8 */}
                <label>Topic</label>
                <input type="text" name="search"/>
                <br/>
                <label>Start Year</label>
                <input type="text" name="startYear"/>
                <br/>
                <label>End Year</label>
                <input type="text" name="endYear"/>
                <br/>
                <Link to="Child1/GrandChild1"><button className="btn btn-primary">Search</button></Link>
              {/*</form>*/}
            </p>  
          </div>
          <div>
                {this.props.children}
          </div>
        </div>
      </div>
    </div>
    );
  }
});

module.exports = Child1;


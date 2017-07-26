// Include React
var React = require("react");

var Link = require("react-router").Link;

var GrandChild1 = require("./grandchildren/GrandChild1");

var headlines = [];

var Child1 = React.createClass({
     getInitialState: function () {
        return {topic: "", dates: "", datef: ""};
    },
    handleSubmit: function (event) {
        // alert('Submitted topic: ' + this.state.topic + this.state.dates + this.state.datef );
        event.preventDefault();
        var startDate = (this.state.dates || "20170101").replace(/-/g,'');
        var endDate = (this.state.datef || "20170101").replace(/-/g,'');
        var userSearch = this.state.topic;
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "1d9ad7b0bbb6450fa6898276487f2e27",
            'q'      : userSearch
            
        })
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
            var docs = result.response.docs;
            docs.forEach( function(doc) {
                // console.log(doc.headline.main);
                headlines.push(doc)


            });
            // console.log(headlines[0].headline.main)
            console.log(headlines)
        }).fail(function(err) {
            throw err;
        });
    },
    handleTopicChange: function (event) {
        this.setState({topic: event.target.value});
    },
    handleDatesChange: function (event) {
        this.setState({dates: event.target.value});
    },
    handleDatefChange: function (event) {
        this.setState({datef: event.target.value});
    },
    console.log("line 52", headlines)

    showArticles: function() {

        const listArticles = headlines.map((article) => 
            <li>{article}</li>
        );
        return ( <ul>{listArticles}</ul> ); 
    },
    
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
  
            
             <form onSubmit={this.handleSubmit}>
                            <div className="input-group input-group-lg">
                                <label>TOPIC</label>
                                <input type="text"  className="form-control" placeholder="Topic" required value={this.state.topic} onChange={this.handleTopicChange}/>
                            </div>
                            <br />
                            <div className="input-group input-group-lg">
                                <label>START YEAR</label>
                                <input type="date" id="datestart" className="form-control"  value={this.state.dates} onChange={this.handleDatesChange}/>
                            </div>
                            <br />
                            <div className="input-group input-group-lg">
                                <label>END YEAR</label>
                                <input type="date" id="fdate" className="form-control"  value={this.state.datef} onChange={this.handleDatefChange}/>
                            </div>
                            <br />
                            <input type="submit" value="Submit" className="btn btn-danger"/>
                        </form>

             
          </div>
          <div>
                
            
            <div className="panel panel-warning">
                  <div className="panel-heading">
                    <h3 className="panel-title">Results</h3>
                  </div>
                  <div className="panel-body">
                    <div className="contentDiv">
                        {this.showArticles()}
                    </div>
                  </div>
            </div>
                    
          </div>
        </div>
      </div>
    </div>
    );
  }
});

module.exports = Child1;


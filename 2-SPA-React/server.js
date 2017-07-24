var express = require('express');

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var cheerio = require('cheerio');

var request = require('request');

var routes = require('./controller/controller.js')

mongoose.Promise = Promise;

var app = express();

var PORT = process.env.PORT || 3000;

// app.use("/", routes);

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
	extended: false
}));

var db = process.env.MONGODB_URI || "mongodb://localhost/espnReact";

mongoose.connect(db, function(error) {

	if (error) {
		throw err
	} else {
		console.log("connected to mongoose");
	}

	
})



app.listen(PORT, function(err) {
	console.log("log", PORT);
})

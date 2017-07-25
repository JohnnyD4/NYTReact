var express = require('express');

var request = require('request');

var cheerio = require('cheerio');

var axios = require('axios');

var router = express.Router();

var userSearch = "soccer";

axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=" + userSearch)
.then(function(response) {
	var url = response.data.response.docs;
for (var i = 0; i < url.length; i++) {

	console.log(url[i].headline.main);
	console.log(url[i].web_url);

}
	
	
})

.catch(function (error) {
    console.log(error);
 })

router.get("/search", function(req, res) {
	console.log("get search");

	res.render("index");
})

router.post("/search", function(req, res) {
	console.log("Search");
})

router.get("/api/saved", function(req, res) {

	TableName.find({})
	.populate("Saved")
	.exec(function(err, doc) {

		if (err) {
			throw err;
		}
		else {
			res.json(doc)
		}
	})
	
})

router.post("/api/saved", function(req, res) {

	var entry = new TableName(result)
})


router.get("/", function(req, res) {
	console.log("Home");

	res.render("index");
})
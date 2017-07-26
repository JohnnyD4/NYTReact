var express = require('express');

var request = require('request');

var cheerio = require('cheerio');

var axios = require('axios');

var router = express.Router();



router.get("/search", function(req, res) {
	console.log("get search", req.body);

	var userSearch = "soccer";

	axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=" + userSearch)
	.then(function(response) {
	var url = response.data.response.docs;
	for (var i = 0; i < url.length; i++) {

		// console.log(url[i].headline.main);
		// console.log(url[i].web_url);

		var headline = url[i].headline.main;

		var link = url[i].web_url;
		var data = {
			"headline": headline,
			"link": link
		}

		console.log(data);

	}
	res.send(JSON.stringify(url));
	
})

.catch(function (error) {
    console.log(error);
 })

	
})

router.post("/search", function(req, res) {
	console.log("Search");


	res.redirect("/");
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


// router.get("/", function(req, res) {
// 	console.log("Home");

// 	res.render("index.html");
// })

module.exports = router;
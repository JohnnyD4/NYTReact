var express = require('express');

var request = require('request');

var cheerio = require('cheerio');

var router = express.Router();



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

	res.render("index")
})
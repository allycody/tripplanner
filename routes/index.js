var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var models = require('../models');
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');

var Promise = require('bluebird');

// router.use( bodyParser.urlencoded({extended: false}) );	
// router.use( bodyParser.json() ); //creates req.body

router.get('/', function (req, res, next){
	var hotelPromise = Hotel.findAll();
	var restPromise = Restaurant.findAll();
	var actPromise = Activity.findAll();
	Promise.all([hotelPromise, restPromise, actPromise])
	.then(function (result){
		console.log("inside then function");
		res.render('index.html', {hotels: result[0], restaurants: result[1], activity: result[2]});
	})
	.catch(next);
})

module.exports = router;
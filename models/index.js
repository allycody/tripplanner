var db = require('./_db');
var Sequelize = require('sequelize');
var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

// define models, make associations, etc.

// var Place = db.define('place', {
// 	address: {
// 		type: Sequelize.STRING, allowNull: false
// 	},
// 	city: {
// 		type: Sequelize.STRING, allowNull: false
// 	},
// 	state: {
// 		type: Sequelize.STRING, allowNull: false
// 	}, 
// 	phone: {
// 		type: Sequelize.STRING, allowNull: false
// 	},
// 	location: {
// 		type: Sequelize.ARRAY(Sequelize.FLOAT), allowNull: false
// 	}
// });

// var Hotel = db.define('hotel', {
// 	name: {
// 		type: Sequelize.STRING, allowNull: false
// 	},
// 	num_stars: {
// 		type: Sequelize.INTEGER, allowNull: false,
// 		validate: {
// 			isIn: [[1, 2, 3, 4, 5]]
// 		}
// 	},
// 	amenities: {
// 		type: Sequelize.TEXT, allowNull: false
// 	}
// });

// var Activity = db.define('activity', {
// 	name: {
// 		type: Sequelize.STRING, allowNull: false
// 	},
// 	age_range: {
// 		type: Sequelize.STRING, allowNull: false
// 	}
// });

// var Restaurant = db.define('restaurant', {
// 	name: {
// 		type: Sequelize.STRING, allowNull: false
// 	},
// 	cuisine: {
// 		type: Sequelize.TEXT, allowNull: false
// 	}, 
// 	price: {
// 		type: Sequelize.INTEGER, allowNull: false,
// 		validate: {
// 			isIn: [[1, 2, 3, 4, 5]]
// 		}
// 	}
// });


Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);


module.exports = db;
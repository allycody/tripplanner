var db = require('./_db');
var Sequelize = require('sequelize');

var Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING, allowNull: false
	},
	num_stars: {
		type: Sequelize.INTEGER, allowNull: false,
		validate: {
			isIn: [[1, 2, 3, 4, 5]]
		}
	},
	amenities: {
		type: Sequelize.TEXT, allowNull: false
	}
});

module.exports = Hotel;
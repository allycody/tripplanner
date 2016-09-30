var db = require('./_db');
var Sequelize = require('sequelize');

var Restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING, allowNull: false
	},
	cuisine: {
		type: Sequelize.TEXT, allowNull: false
	}, 
	price: {
		type: Sequelize.INTEGER, allowNull: false,
		validate: {
			isIn: [[1, 2, 3, 4, 5]]
		}
	}
});

module.exports = Restaurant;
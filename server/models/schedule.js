const mongoose = require('mongoose');

const Schedules = new mongoose.Schema({
	user_id: {
		type: String
	},
	title: {
		type: String
	},
	description: {
		type: String
	},
	date: {
		type: Date
	},
	type: {
		type:[{
			enum:['reunião','evento']
		}]
	},
	loca:{
		type: String,
	}

});

module.exports = mongoose.model('Schedules', Schedules);
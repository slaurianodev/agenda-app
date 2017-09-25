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
			type: String,
			enum:['reunião','evento']
		}]
	},
	local:{
		type: String,
	}

});

module.exports = mongoose.model('Schedules', Schedules);
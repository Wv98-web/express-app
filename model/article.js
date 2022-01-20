const mongoose = require("mongoose");

var articleSchema = new mongoose.Schema({
	username: { type: String, require: true },
	email: { type: String, require: true },
	password: { type: String, require: true },
	bio: {
		type: String,
		default: null,
	},
	Image: {
		type: String,
		default: null,
	},
	createAt: {
		type: Date,
		default: Date.now,
	},
	updateAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = articleSchema;

const mongoose = require("mongoose");
const baseModel = require("./baseModel");

var userSchema = new mongoose.Schema({
	...baseModel,
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
});

module.exports = userSchema;

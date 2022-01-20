const mongoose = require("mongoose");
const baseModel = require("./baseModel");
const md5 = require("../util/md5");

var userSchema = new mongoose.Schema({
	...baseModel,
	username: { type: String, require: true },
	email: {
		type: String,
		require: true,
	},
	password: {
		type: String,
		require: true,
		set: (value) => {
			return md5(value);
		},
		// select: false,
	},
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

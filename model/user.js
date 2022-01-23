const mongoose = require("mongoose");
const baseModel = require("./baseModel");
const md5 = require("../util/md5");

var userSchema = new mongoose.Schema({
	...baseModel,
	username: { type: String, required: true },
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
		set: (value) => {
			return md5(value);
		},
		select: false,
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

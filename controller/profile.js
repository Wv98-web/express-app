exports.getProfile = async (req, res, next) => {
	try {
		res.send("get /profiles/:username");
	} catch (error) {
		next(error);
	}
};

exports.addFollowProfile = async (req, res, next) => {
	try {
		res.send("post /profiles/:username/follow");
	} catch (error) {
		next(error);
	}
};

exports.deleteFollowProfile = async (req, res, next) => {
	try {
		res.send("delete /profiles/:username/follow");
	} catch (error) {
		next(error);
	}
};

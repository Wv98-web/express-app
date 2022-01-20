exports.getTag = async (req, res) => {
	try {
		res.send("get /tags");
	} catch (error) {
		next(error);
	}
};

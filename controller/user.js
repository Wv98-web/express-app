// 用户登录
exports.login = async (req, res, next) => {
	try {
		// 处理请求
		res.send("post /users/login");
	} catch (err) {
		next(err);
	}
};

// 用户注册
exports.register = async (req, res, next) => {
	try {
		res.send("post /users");
	} catch (error) {
		next(error);
	}
};

exports.getCurrentUser = async (req, res, next) => {
	try {
		res.send("get /user");
	} catch (error) {
		next(error);
	}
};

exports.updateCurrentUser = async (req, res, next) => {
	try {
		res.send("put /user");
	} catch (error) {
		next(error);
	}
};

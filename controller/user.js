// 用户登录
exports.login = async (req, res) => {
	try {
		// 处理请求
		res.send("post /users/login");
	} catch (error) {
		next(error);
	}
};

// 用户注册
exports.register = async (req, res) => {
	try {
		res.send("post /users");
	} catch (error) {
		next(error);
	}
};

exports.getCurrentUser = async (req, res) => {
	try {
		res.send("get /user");
	} catch (error) {
		next(error);
	}
};

exports.updateCurrentUser = async (req, res) => {
	try {
		res.send("put /user");
	} catch (error) {
		next(error);
	}
};

const { User } = require("../model");
const jwt = require("../util/jwt");
const { jwtSecret } = require("../config/config.default");

// 用户登录
exports.login = async (req, res, next) => {
	try {
		// 1.数据验证
		// 2.生成token
		const user = req.user.toJSON();
		const token = await jwt.sign(
			{
				userId: user._id,
			},
			jwtSecret
		);

		// 3.发送成功响应 (包含token的用户信息)
		delete user.password;
		res.status(200).json({
			...user,
			token,
		});
	} catch (err) {
		next(err);
	}
};

// 用户注册
exports.register = async (req, res, next) => {
	try {
		// 1.获取请求体数据
		console.log(req.body);

		// 2.数据验证
		// 2.1 基本数据验证
		// 2.2 业务数据验证

		// 3.验证通过，将数据保存到数据库
		let user = new User(req.body.user);
		await user.save();

		// password 不发送到客户端
		user = user.toJSON(); // mongoose数据对象，转换成json对象
		delete user.password;

		// 4.发送成功响应
		res.status(201).json({
			user,
		});
	} catch (error) {
		next(error);
	}
};

exports.getCurrentUser = async (req, res, next) => {
	try {
		res.status(200).json({
			user: req.user,
		});
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

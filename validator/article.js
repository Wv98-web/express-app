const { body, param } = require("express-validator");
const validator = require("../middleware/validator");
const mongoose = require("mongoose");

exports.createArticle = validator([
	body("article.title").notEmpty().withMessage("文章标题不能为空"),
	body("article.description").notEmpty().withMessage("文章描述不能为空"),
	body("article.body").notEmpty().withMessage("文章内容不能为空"),
]);

exports.getArticle = validator([
	// param("articleId").custom((value) => {
	// 	if (!mongoose.isValidObjectId(value)) {
	// 		// return Promise.reject("文章id类型错误");
	// 		// 同步: 失败
	// 		throw new Error("文章ID类型错误");
	// 	}
	// 	// 同步: 成功
	// 	return true;
	// }),

	param("articleId").custom(async (value) => {
		if (!mongoose.isValidObjectId(value)) {
			// 异步失败 返回一个失败状态的promise
			return Promise.reject("文章id类型错误");
		}
	}),
]);

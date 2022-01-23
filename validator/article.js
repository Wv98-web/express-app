const { body, param } = require("express-validator");
const validator = require("../middleware/validator");
// const mongoose = require("mongoose");
const { User, Article } = require("../model");

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

	// param("articleId").custom(async (value) => {
	// 	if (!mongoose.isValidObjectId(value)) {
	// 		// 异步失败 返回一个失败状态的promise
	// 		return Promise.reject("文章id类型错误");
	// 	}
	// }),

	validator.isValidObjectId(["params"], "articleId"),
]);

exports.updateArticle = [
	validator([
		validator.isValidObjectId(["params"], "articleId"),
		// param('articleId').isValidObjectId()
	]),
	async (req, res, next) => {
		const articleId = req.params.articleId;
		const article = await Article.findById(articleId);
		req.article = article;

		if (!article) {
			return res.status(404).end();
		}
		next();
	},
	async (req, res, next) => {
		if (req.user._id.toString() !== req.article.author.toString()) {
			return res.status(403).end();
		}
		next();
	},
];

// 校验文章是否存在
// 修改的文章作者是否是当前登录用户

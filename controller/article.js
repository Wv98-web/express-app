const { Article } = require("../model");

exports.getArticlesFeed = async (req, res, next) => {
	try {
		res.send("get /articles/feed");
	} catch (error) {
		next(error);
	}
};

// 获取文章列表
exports.getArticles = async (req, res, next) => {
	try {
		const articles = await Article.find();
		const articlesCount = await Article.countDocuments();

		res.status(200).json({
			articles,
			articlesCount,
		});
	} catch (error) {
		next(error);
	}
};

// 创建文章
exports.createArticle = async (req, res, next) => {
	try {
		const article = new Article(req.body.article);
		article.author = req.user._id;
		article.populate("author"); // 映射
		await article.save();

		res.status(201).json({
			article,
		});
	} catch (error) {
		next(error);
	}
};

// 获取文章
exports.getArticle = async (req, res, next) => {
	try {
		const article = await Article.findById(req.params.articleId).populate("author");
		if (!article) {
			return res.status(404).end();
		}
		return res.status(200).json({
			article,
		});
	} catch (error) {
		next(error);
	}
};

// 更新文章
exports.updateArticle = async (req, res, next) => {
	try {
		res.send("put /articles/:slug");
	} catch (error) {
		next(error);
	}
};

// 删除文章
exports.deleteArticle = async (req, res, next) => {
	try {
		res.send("delete /articles/:slug");
	} catch (error) {
		next(error);
	}
};

exports.getArticleCommits = async (req, res, next) => {
	try {
		res.send("get /articles/:slug/comments");
	} catch (error) {
		next(error);
	}
};

exports.createArticleCommits = async (req, res, next) => {
	try {
		res.send("post /articles/:slug/comments");
	} catch (error) {
		next(error);
	}
};

exports.deleteArticleCommit = async (req, res, next) => {
	try {
		res.send("delete /articles/:slug/comments/:id");
	} catch (error) {
		next(error);
	}
};

exports.addFavoriteArticle = async (req, res, next) => {
	try {
		res.send("post /articles/:slug/favorite");
	} catch (error) {
		next(error);
	}
};

exports.deleteFavoriteArticle = async (req, res, next) => {
	try {
		res.send("delete /articles/:slug/favorite");
	} catch (error) {
		next(error);
	}
};

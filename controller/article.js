const { Article } = require("../model");

exports.getArticlesFeed = async (req, res, next) => {
	try {
		res.send("get /articles/feed");
	} catch (error) {
		next(error);
	}
};

exports.getArticles = async (req, res, next) => {
	try {
		res.send("get /articles");
	} catch (error) {
		next(error);
	}
};

exports.addArticles = async (req, res, next) => {
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

exports.getArticlesSlug = async (req, res, next) => {
	try {
		res.send("get /articles/:slug");
	} catch (error) {
		next(error);
	}
};

exports.updateArticlesSlug = async (req, res, next) => {
	try {
		res.send("put /articles/:slug");
	} catch (error) {
		next(error);
	}
};

exports.deleteArticlesSlug = async (req, res, next) => {
	try {
		res.send("delete /articles/:slug");
	} catch (error) {
		next(error);
	}
};

exports.deleteArticlesSlugCommits = async (req, res, next) => {
	try {
		res.send("get /articles/:slug/comments");
	} catch (error) {
		next(error);
	}
};

exports.getArticlesSlugCommits = async (req, res, next) => {
	try {
		res.send("get /articles/:slug/comments");
	} catch (error) {
		next(error);
	}
};

exports.addArticlesSlugCommits = async (req, res, next) => {
	try {
		res.send("post /articles/:slug/comments");
	} catch (error) {
		next(error);
	}
};

exports.deleteArticlesSlugCommit = async (req, res, next) => {
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

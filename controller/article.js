exports.getArticlesFeed = async (req, res) => {
	try {
		res.send("get /articles/feed");
	} catch (error) {
		next(error);
	}
};

exports.getArticles = async (req, res) => {
	try {
		res.send("get /articles");
	} catch (error) {
		next(error);
	}
};

exports.addArticles = async (req, res) => {
	try {
		res.send("post /articles");
	} catch (error) {
		next(error);
	}
};

exports.getArticlesSlug = async (req, res) => {
	try {
		res.send("get /articles/:slug");
	} catch (error) {
		next(error);
	}
};

exports.updateArticlesSlug = async (req, res) => {
	try {
		res.send("put /articles/:slug");
	} catch (error) {
		next(error);
	}
};

exports.deleteArticlesSlug = async (req, res) => {
	try {
		res.send("delete /articles/:slug");
	} catch (error) {
		next(error);
	}
};

exports.deleteArticlesSlugCommits = async (req, res) => {
	try {
		res.send("get /articles/:slug/comments");
	} catch (error) {
		next(error);
	}
};

exports.getArticlesSlugCommits = async (req, res) => {
	try {
		res.send("get /articles/:slug/comments");
	} catch (error) {
		next(error);
	}
};

exports.addArticlesSlugCommits = async (req, res) => {
	try {
		res.send("post /articles/:slug/comments");
	} catch (error) {
		next(error);
	}
};

exports.deleteArticlesSlugCommit = async (req, res) => {
	try {
		res.send("delete /articles/:slug/comments/:id");
	} catch (error) {
		next(error);
	}
};

exports.addFavoriteArticle = async (req, res) => {
	try {
		res.send("post /articles/:slug/favorite");
	} catch (error) {
		next(error);
	}
};

exports.deleteFavoriteArticle = async (req, res) => {
	try {
		res.send("delete /articles/:slug/favorite");
	} catch (error) {
		next(error);
	}
};

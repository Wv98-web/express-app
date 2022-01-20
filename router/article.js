const express = require("express");

const router = express.Router();

// 获取文章
router.get("/articles/feed", async (req, res) => {
	try {
		res.send("get /articles/feed");
	} catch (error) {
		next(error);
	}
});

//
router.get("/articles", async (req, res) => {
	try {
		res.send("get /articles");
	} catch (error) {
		next(error);
	}
});

router.post("/articles", async (req, res) => {
	try {
		res.send("post /articles");
	} catch (error) {
		next(error);
	}
});

//
router.get("/articles/:slug", async (req, res) => {
	try {
		res.send("get /articles/:slug");
	} catch (error) {
		next(error);
	}
});

router.put("/articles/:slug", async (req, res) => {
	try {
		res.send("put /articles/:slug");
	} catch (error) {
		next(error);
	}
});

router.delete("/articles/:slug", async (req, res) => {
	try {
		res.send("delete /articles/:slug");
	} catch (error) {
		next(error);
	}
});

//
router.get("/articles/:slug/comments", async (req, res) => {
	try {
		res.send("get /articles/:slug/comments");
	} catch (error) {
		next(error);
	}
});

router.post("/articles/:slug/comments", async (req, res) => {
	try {
		res.send("post /articles/:slug/comments");
	} catch (error) {
		next(error);
	}
});

//
router.delete("/articles/:slug/comments/:id", async (req, res) => {
	try {
		res.send("delete /articles/:slug/comments/:id");
	} catch (error) {
		next(error);
	}
});

//
router.post("/articles/:slug/favorite", async (req, res) => {
	try {
		res.send("post /articles/:slug/favorite");
	} catch (error) {
		next(error);
	}
});

router.delete("/articles/:slug/favorite", async (req, res) => {
	try {
		res.send("delete /articles/:slug/favorite");
	} catch (error) {
		next(error);
	}
});

module.exports = router;

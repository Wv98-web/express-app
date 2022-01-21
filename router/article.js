const express = require("express");
const articleCtrl = require("../controller/article");
const auth = require("../middleware/auth");

const router = express.Router();

// 获取关注作者文章列表
router.get("/articles/feed", auth, articleCtrl.getArticlesFeed);

// 获取文章列表
router.get("/articles", auth, articleCtrl.getArticles);

router.post("/articles", auth, articleCtrl.addArticles);

//
router.get("/articles/:slug", auth, articleCtrl.getArticlesSlug);

router.put("/articles/:slug", auth, articleCtrl.updateArticlesSlug);

router.delete("/articles/:slug", auth, articleCtrl.deleteArticlesSlug);

//
router.get("/articles/:slug/comments", auth, articleCtrl.getArticlesSlugCommits);

router.post("/articles/:slug/comments", auth, articleCtrl.addArticlesSlugCommits);

//
router.delete("/articles/:slug/comments/:id", auth, articleCtrl.deleteArticlesSlugCommit);

//
router.post("/articles/:slug/favorite", auth, articleCtrl.addFavoriteArticle);

router.delete("/articles/:slug/favorite", auth, articleCtrl.deleteFavoriteArticle);

module.exports = router;

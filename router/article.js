const express = require("express");
const articleCtrl = require("../controller/article");

const router = express.Router();

// 获取关注作者文章列表
router.get("/articles/feed", articleCtrl.getArticlesFeed);

// 获取文章列表
router.get("/articles", articleCtrl.getArticles);

router.post("/articles", articleCtrl.addArticles);

//
router.get("/articles/:slug", articleCtrl.getArticlesSlug);

router.put("/articles/:slug", articleCtrl.updateArticlesSlug);

router.delete("/articles/:slug", articleCtrl.deleteArticlesSlug);

//
router.get("/articles/:slug/comments", articleCtrl.getArticlesSlugCommits);

router.post("/articles/:slug/comments", articleCtrl.addArticlesSlugCommits);

//
router.delete("/articles/:slug/comments/:id", articleCtrl.deleteArticlesSlugCommit);

//
router.post("/articles/:slug/favorite", articleCtrl.addFavoriteArticle);

router.delete("/articles/:slug/favorite", articleCtrl.deleteFavoriteArticle);

module.exports = router;

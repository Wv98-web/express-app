const express = require("express");
const articleCtrl = require("../controller/article");
const auth = require("../middleware/auth");
const articleValidator = require("../validator/article");

const router = express.Router();

// 获取关注作者文章列表
router.get("/articles/feed", auth, articleCtrl.getArticlesFeed);

// 获取文章列表
router.get("/articles", auth, articleCtrl.getArticles);

// 创建文章
router.post("/articles", auth, articleValidator.createArticle, articleCtrl.addArticles);

// 获取文章
router.get("/articles/:slug", auth, articleCtrl.getArticlesSlug);

// 更新文章
router.put("/articles/:slug", auth, articleCtrl.updateArticlesSlug);

// 删除文章
router.delete("/articles/:slug", auth, articleCtrl.deleteArticlesSlug);

// 获取文章评论
router.get("/articles/:slug/comments", auth, articleCtrl.getArticlesSlugCommits);

// 添加文章评论
router.post("/articles/:slug/comments", auth, articleCtrl.addArticlesSlugCommits);

// 删除文章评论
router.delete("/articles/:slug/comments/:id", auth, articleCtrl.deleteArticlesSlugCommit);

//
router.post("/articles/:slug/favorite", auth, articleCtrl.addFavoriteArticle);

router.delete("/articles/:slug/favorite", auth, articleCtrl.deleteFavoriteArticle);

module.exports = router;

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
router.post("/articles", auth, articleValidator.createArticle, articleCtrl.createArticle);

// 获取文章
router.get("/articles/:articleId", auth, articleValidator.getArticle, articleCtrl.getArticle);

// 更新文章
router.put("/articles/:articleId", auth, articleValidator.updateArticle, articleCtrl.updateArticle);

// 删除文章
router.delete("/articles/:articleId", auth, articleCtrl.deleteArticle);

// 获取文章评论列表
router.get("/articles/:articleId/comments", auth, articleCtrl.getArticleCommits);

// 添加文章评论
router.post("/articles/:articleId/comments", auth, articleCtrl.createArticleCommits);

// 删除文章评论
router.delete("/articles/:articleId/comments/:id", auth, articleCtrl.deleteArticleCommit);

//
router.post("/articles/:articleId/favorite", auth, articleCtrl.addFavoriteArticle);

router.delete("/articles/:articleId/favorite", auth, articleCtrl.deleteFavoriteArticle);

module.exports = router;

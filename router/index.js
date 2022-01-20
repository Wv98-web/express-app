const express = require("express");

const router = express.Router();

// 用户相关路由
router.use(require("./user"));
// 用户资料相关路由
router.use(require("./profile"));
// 文章相关路由
router.use(require("./article"));
// 文章相关路由
router.use(require("./tag"));
// 文章相关路由
router.use(require("./profile"));

module.exports = router;

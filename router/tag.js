const express = require("express");
const tagCtrl = require("../controller/tag");

const router = express.Router();

// 获取标签
router.get("/tags", tagCtrl.getTag);

module.exports = router;

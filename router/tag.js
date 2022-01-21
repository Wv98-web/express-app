const express = require("express");
const tagCtrl = require("../controller/tag");
const auth = require("../middleware/auth");

const router = express.Router();

// 获取标签
router.get("/tags", auth, tagCtrl.getTag);

module.exports = router;

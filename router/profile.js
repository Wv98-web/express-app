const express = require("express");
const profileCtrl = require("../controller/profile");
const auth = require("../middleware/auth");

const router = express.Router();

// 获取某一用户资料
router.get("/profiles/:username", auth, profileCtrl.getProfile);

// 关注用户
router.post("/profiles/:username/follow", auth, profileCtrl.addFollowProfile);

// 取消关注用户
router.delete("/profiles/:username/follow", auth, profileCtrl.deleteFollowProfile);

module.exports = router;

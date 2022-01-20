const express = require("express");
const profileCtrl = require("../controller/profile");

const router = express.Router();

// 获取某一用户资料
router.get("/profiles/:username", profileCtrl.getProfile);

// 关注用户
router.post("/profiles/:username/follow", profileCtrl.addFollowProfile);

// 取消关注用户
router.delete("/profiles/:username/follow", profileCtrl.deleteFollowProfile);

module.exports = router;

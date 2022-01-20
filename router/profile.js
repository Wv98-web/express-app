const express = require("express");

const router = express.Router();

// 获取某一用户资料
router.get("/profiles/:username", async (req, res) => {
	try {
		res.send("get /profiles/:username");
	} catch (error) {
		next(error);
	}
});

// 关注用户
router.post("/profiles/:username/follow", async (req, res) => {
	try {
		res.send("post /profiles/:username/follow");
	} catch (error) {
		next(error);
	}
});

// 取消关注用户
router.delete("/profiles/:username/follow", async (req, res) => {
	try {
		res.send("delete /profiles/:username/follow");
	} catch (error) {
		next(error);
	}
});

module.exports = router;

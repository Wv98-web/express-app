const express = require("express");

const router = express.Router();

//
router.get("/tags", async (req, res) => {
	try {
		res.send("get /tags");
	} catch (error) {
		next(error);
	}
});

module.exports = router;

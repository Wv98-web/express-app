const mongoose = require("mongoose");
const { dbUrl } = require("../config/config.default");

// 链接 MongoDB 数据库
mongoose.connect(dbUrl);

var db = mongoose.connection;
db.on("error", (err) => {
	console.log("MongoDB 数据库连接成功", err);
});
db.once("open", () => {
	console.log("MongoDB 数据库连接成功");
});

// 创建一个模型
// const Cat = mongoose.model("Cat", { name: String });

// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));

// 组织导出模型类
module.exports = {
	User: mongoose.model("User", require("./user")),
	Article: mongoose.model("Article", require("./article")),
};

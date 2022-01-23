const express = require("express");
const morgan = require("morgan"); // 日志输出
const router = require("./router");
const errorhandler = require("errorhandler");
require("./model");
const template = require("art-template");
const path = require("path");

const app = express();
// view engine setup
app.engine("html", require("express-art-template"));
app.set("view options", {
	debug: process.env.NODE_ENV !== "production",
});
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

app.use(morgan("dev"));
// 解析请求体
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

const PORT = process.env.PORT || 3000;

// 挂载路由
app.use("/", router);

// 挂载统一处理服务端错误中间件
if (process.env.NODE_ENV === "development") {
	// only use in development
	app.use(errorhandler());
}

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});

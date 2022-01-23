const express = require("express");
const morgan = require("morgan"); // 日志输出
const cors = require("cors"); // 为客户端提供跨域资源请求
const router = require("./router/index");
const errorHandler = require("./middleware/errorHandler");
require("./model");

const app = express();
const fs = require("fs");

app.use(morgan("dev"));

// 解析请求体
app.use(express.json());
// app.use(express.urlencoded());

app.use(cors());

const PORT = process.env.PORT || 3000;

const todos = [
	{ id: 1, title: "吃饭1" },
	{ id: 2, title: "吃饭2" },
	{ id: 3, title: "吃饭3" },
];

// 服务端渲染
app.get("/", (req, res) => {
	// 1. 普通文本
	// res.send("Hello World");
	// 2. HTML 格式文本
	// res.send("<h1>Hello World</h1>");
	// 3. 单独文件
	// fs.readFile("./view/index.html", (err, data) => {
	// 	if (err) {
	// 		return res.status(404).send("404 Not Found");
	// 	}
	// 	return res.end(data);
	// });
	// 4. 动态页面渲染 ，有数据
	fs.readFile("./view/index.html", "utf8", (err, data) => {
		if (err) {
			return res.status(404).send("404 Not Found");
		}

		let str = "";
		todos.forEach((todo) => {
			str += `<li>${todo.title}</li>`;
		});
		console.log(str);

		// console.log(data);
		const ret = data.replace("&&&", str);

		res.end(ret);
	});
});

// 挂载路由
app.use("/api", router);

// 挂载统一处理服务端错误中间件
app.use(errorHandler());

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});

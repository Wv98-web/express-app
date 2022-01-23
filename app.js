const express = require("express");
const morgan = require("morgan"); // 日志输出
const cors = require("cors"); // 为客户端提供跨域资源请求
const router = require("./router/index");
const errorHandler = require("./middleware/errorHandler");
require("./model");
const template = require("art-template");
const path = require("path");
const util = require("util");

const app = express();
const fs = require("fs");

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
// app.use(express.urlencoded());

app.use(cors());

const PORT = process.env.PORT || 3000;

const todos = [
	{ id: 1, title: "吃饭1" },
	{ id: 2, title: "吃饭2" },
	{ id: 3, title: "吃饭3" },
];

// 托管静态资源
// app.use(
// 	express.static(path.join(__dirname, "./pubilc"), {
// 		// index: ['index.html'], // 默认展示
// 	})
// ); // localhost:3000/css/main.css
// 资源托管顺序问题
// app.use(express.static(path.join(__dirname, "./node_modules"))); // 如果node_modules文件夹中也有 /css/main.css, 将不在展示，只展示 pubilc 文件夹中的 css/mian.css 文件
// 多个静态资源
app.use(
	"/pubilc",
	express.static(path.join(__dirname, "./pubilc"), {
		// index: ['index.html'],
	})
); // loaclhost:3000/pubilc/css/main.css
app.use("/node_modules", express.static(path.join(__dirname, "./node_modules"))); // 如果想要引入 node_modules 中的 /css/main.css，加上一个路径 "/node_module"

// 服务端渲染
app.get("/", (req, res) => {
	// 1. 普通文本
	// res.send("Hello World");
	// 2. HTML 格式文本
	// res.send("<h1>Hello World</h1>");
	// 3. 单独文件
	// fs.readFile("./views/index.html", (err, data) => {
	// 	if (err) {
	// 		return res.status(404).send("404 Not Found");
	// 	}
	// 	return res.end(data);
	// });
	// 4. 动态页面渲染 ，有数据
	// fs.readFile("./views/index.html", "utf8", (err, data) => {
	// 	if (err) {
	// 		return res.status(404).send("404 Not Found");
	// 	}
	// 	let str = "";
	// 	todos.forEach((todo) => {
	// 		str += `<li>${todo.title}</li>`;
	// 	});
	// 	console.log(str);
	// 	// console.log(data);
	// 	const ret = data.replace("&&&", str);
	// 	res.end(ret);
	// });
	// 5. 模板引擎
	res.render("index", {
		foo: "bar",
		todos,
	});
});

// app.get("/pubilc/css/main.css", async (req, res) => {
// 	const data = await util.promisify(fs.readFile)("./pubilc/css/main.css");
// 	res.end(data);
// });

// 挂载路由
app.use("/api", router);

// 挂载统一处理服务端错误中间件
app.use(errorHandler());

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});

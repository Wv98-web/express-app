const express = require("express");

const app = express();

// 中间件

// 不做任何限定的中间件
// app.use((req, res, next) => {
// 	console.log("time", Date.now());
// 	next(); // 下一个中间件
// });

// 限定请求路径的中间件
// app.use("/", (req, res, next) => {
// 	console.log("Request Type:", req.method);
// 	next(); // 下一个中间件
// });

// 限定请求方法 + 请求路径 的中间件
// app.get("/", (req, res, next) => {
// 	res.send("get /");
// 	next();
// });

// 多个处理函数：
// app.use(
// 	"/",
// 	(req, res, next) => {
// 		console.log("Request URL:", req.originalUrl);
// 		next(); // 真的是下一个
// 	},
// 	(req, res, next) => {
// 		console.log("Resquest Type:", req.method);
// 		next(); // 这个next 会脱离处理栈，往后茶轴匹配调用
// 	}
// );

// app.get("/user/:id", (req, res) => {
// 	res.send("get /user/:id");
// });

// 为同一个路径定义多个处理中间件:
app.get(
	"/user/:id",
	(req, res, next) => {
		console.log("ID:", req.params.id);
		next();
	},
	(req, res, next) => {
		res.send("User Info");
	}
);

app.get("/user/:id", (req, res, next) => {
	console.log(123);
});

app.listen(3000, () => {
	console.log(`Server running at http://localhost:3000/`);
});

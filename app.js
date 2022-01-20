const express = require("express");
const morgan = require("morgan"); // 日志输出
const cors = require("cors"); // 为客户端提供跨域资源请求
const router = require("./router/index");

const app = express();

app.use(morgan("dev"));

// 解析请求体
app.use(express.json());
app.use(express.urlencoded());

app.use(cors());

const PORT = process.env.PORT || 3000;

// 挂载路由
app.use("/api", router);

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});

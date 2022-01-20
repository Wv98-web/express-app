const { json } = require("express/lib/response");
const fs = require("fs");
const { promisify } = require("util"); // 原生的异步api不支持promise 使用promisify把callback方式的异步api转换promise的方式
const path = require("path");

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const dbPath = path.join(__dirname, "./db.json");

exports.getDb = async () => {
	const data = await readFile(dbPath, "utf-8");
	return JSON.parse(data);
};

exports.saveDb = async (db) => {
	const data = JSON.stringify(db, null, "  ");

	await writeFile(dbPath, data);
};

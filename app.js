var express = require("express")

var app = express()

const bodyParser = require("body-parser");

const ws = require("./ws.js")

app.get("/", (req, res) => {
  res.send("1111")
})

app.listen(55555, function () {
  console.log("服务器启动成功")
})
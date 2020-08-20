var ws = require("nodejs-websocket");
console.log("开始建立连接...")
// 用户列表
var userObj = {}
var history = {}
ws.createServer(function (conn) {
  conn.on("text", function (obj) {
    let data = JSON.parse(obj)
    let { user, from, to, mes } = JSON.parse(obj)
    if (user) {
      userObj[user] = conn
      userObj[user].sendText(JSON.parse(obj).user)
      history[user] = {}
    } else {
      history[from][to] ? true : history[from][to] = []
      history[from][to].push(data)
      userObj[to] ? userObj[to].sendText(obj) : true, userObj[from].sendText(obj)
    }
  })
  conn.on("close", function (code, reason) {
    console.log(code)
    console.log("关闭连接")
  });
  conn.on("error", function (code, reason) {
    console.log("异常关闭")
  });
}).listen(8001)
console.log("-------------WebSocket建立完毕-------------")
// setInterval(function () {
//   console.log(history)
// }, 2000)
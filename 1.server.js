var http = require("http");
//创建一个http服务器；
var server = http.createServer(function (req, res) {
    res.write("hello");
    res.end();
});
//创建一个监听
server.listen(8081, function () {
    console.log("监听中")
});

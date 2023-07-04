var http = require("http");
var fs = require("fs");
var url = require("url");

var app = http.createServer(function (req, res) {
  var _url = req.url;
  var queryData = url.parse(_url, true).query;
  console.log(queryData.id);
  if (_url == "/") {
    _url = "/index.html";
  }
  if (_url == "favicon.ico") {
    return res.writeHead(404);
  }
  res.writeHead(200);
  res.end(queryData.id); //쿼리스트링에 따라서 다른 정보를 출력하기
});

app.listen(3000);

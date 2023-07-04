const express = require("express");
app = express();

app.listen(8080, function () {
  console.log("Listening on 8080");
});

//.sendFile("보낼 파일 경로")
// 서버에 파일 요청하기

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

const express = require("express");
app = express();

app.listen(8080, function () {
  console.log("Listening on 8080");
});
//요청 처리하는 GET
//GET요청은 url에 입력하는 것이다.

//누군가가 /intro으로 url을 작성해 방문하면 intro관련된 안내문을 띄워주자

// app.get("경로", function (요청, 응답) {
//     응답.send("반갑습니다");
// });

app.get("/intro", function (req, res) {
  res.send("Hello");
});

app.get("/list", function (req, res) {
  res.send("TO DO LIST");
});

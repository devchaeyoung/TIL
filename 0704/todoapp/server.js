const express = require("express");
app = express();

app.listen(8080, function () {
  //listen(파라미터1, 파라미터2) => listen(서버 띄울 포트번호, 띄운 후 실행할 코드)
  // 8080 port에 서버를 띄워주세요!
  console.log("Listening on 8080");
  //8080 port에 무사히 들어오면 "Listening on 8080"메세지를 띄워주세요.
});
// 서버 접속하는 방법은 주소창에 localhost:8080입력하기

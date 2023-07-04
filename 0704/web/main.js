var http = require("http");
var fs = require("fs");
const url = require("url");

var app = http.createServer(function (request, response) {
  const _url = request.url;
  var queryData = url.parse(request.url, true).query;
  console.log(queryData);

  if (_url == "/") {
    url = "/index.html";
  }
  if (_url == "/favicon.ico") {
    return response.writeHead(404);
  }
  response.writeHead(200);

  const template = `<!doctype html>
  <html>
  <head>
    <title>WEB1 - ${template}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/?id=index">WEB</a></h1>
    <ol>
      <li><a href="/?id=HTML">HTML</a></li>
      <li><a href="/?id=CSS">CSS</a></li>
      <li><a href="/?id=JavaScript">JavaScript</a></li>
    </ol>
    <h2>${template}</h2>
    <p>The World Wide Web (abbreviated WWW or the Web) is an information space where documents and other web resources are identified by Uniform Resource Locators (URLs), interlinked by hypertext links, and can be accessed via the Internet.[1] English scientist Tim Berners-Lee invented the World Wide Web in 1989. He wrote the first web browser computer program in 1990 while employed at CERN in Switzerland.[2][3] The Web browser was released outside of CERN in 1991, first to other research institutions starting in January 1991 and to the general public on the Internet in August 1991.
    </p>
  </body>
  </html>
  `;

  response.end(fs.readFileSync(__dirname + _url));
});
app.listen(3001);

var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'texthtml'});
  res.write("The date and time are currently: " + dt.myDateTime() + "\r\n");
  res.write(req.url + "\r\n");
   var q = url.parse(req.url, true).query;
  var txt = q.year + " and " + q.month + "\r\n";
  res.write(txt);
  res.end();
}).listen(8080);
// 这页 把json 对象 变成字符串并且还是 整理好的
var util = require('util');
var http = require('http');

http.createServer(function(req,res,next){
  res.write(util.inspect(http))
  res.end();
}).listen(8081);

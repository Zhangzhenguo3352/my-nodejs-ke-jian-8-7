// 这个页面 说明了http 是 json 对象，
// 因为 JSON.stringify()  是 json 对象 转换 成字符串的，不然不会打印出来。
var http = require('http');

http.createServer(function(req,res,next){
  res.write(JSON.stringify(http)); // 说明 http 是 json 对象
  res.end();
}).listen(8081);

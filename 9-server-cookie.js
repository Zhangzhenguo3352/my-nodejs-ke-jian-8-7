// 这一节课 通过访问端口向 cookie 里面写数据
var http = require('http');
var querystring = require('querystring');

http.createServer(function(req,res,next){
  console.log('有人来了'+req.url);
  res.setHeader('set-cookie','a=2'); // 通过 访问 端口向 cookie 里面写数据

      res.end('over');

}).listen(8081,function(){
  console.log('打开的文件是： node 9-server-cookie.js')
});

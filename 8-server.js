
//这个页面可以看出 不管是 get 提交还是 post 提交 服务器都可以接收
var http = require('http');
var urlLib = require('url');
var querystring = require('querystring');

http.createServer(function(req,res,next){
  console.log('有人来了'+req.url);
  // get 提交的数据 ， 用 url
  req.get = urlLib.parse(req.url,true).query//只是说明 get 接收的内容转换成 json
  req.url = urlLib.parse(req.url,true).pathname; //  '/aaa'
  var str = '';
  // post 提交的数据 , querystring
  req.addListener('data',function(s){ // addListener =》 on
    str+=s; //post 数据需要一个一个拿过来拼接
  });
  req.addListener('end',function(){ // 无论是 get 提交的还是 post 提交的 都会在这里结束
    req.post= querystring.parse(str);

    console.log(req.get, req.url, req.post)
    // {} '/aaa' { name: 'zxz', age: 'zz' }
  })
}).listen(8081,function(){
  console.log('您打开是：node 8-server.js')
})

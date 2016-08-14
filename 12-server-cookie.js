// 这页 把时间设置在 3 天后，然后下面的过期时间中引用
var http = require('http');
var querystring = require('querystring');

http.createServer(function(req,res,next){
  console.log('有人来了'+req.url);
  var oDate = new Date();
  // oDate.getDate() 这个是几月的 几号(1~31的数字)
  // new Date().getTime()           当前时间戳
  // oDate.setDate(oDate.getDate()) 当前时间戳
  oDate.setDate(oDate.getDate()+3); // 这是个 当前时间戳 加 3 天
  //存储 cookie
  // expires 过期时间
  res.setHeader('set-cookie','ccc=333; expires='+oDate) // 设置过期时间。这个过期时间是根据浏览器的

  //取 cookie
  req.cookie = querystring.parse(req.headers.cookie,'; ')
  console.log(req.cookie) // { a: '2', bb: '22', ccc: '333' }

  // res.setHeader()

  res.end('over');
}).listen(8081,function(){
  console.log('打开的是： supervisor 12-server-cookie.js')
});

// 这个页面 存储 cookie 而且 成功将 cookie 转换 json 格式
//         1，利用 res.setHeader('set-cookie','bb=22')
//         2, 利用 querystring.parse() 转换json , a=2 和 bb=22 =》 { a: '2; bb=22' }
//         3, 利用 querystring.parse(req.headers.cookie,'; ') 切割 替换掉了 ; 转换真正 json 。{ a: '2; bb=22' } =》{ a: '2', bb: '22' }
var http = require('http');
var querystring = require('querystring');

http.createServer(function(req,res,next){
  console.log('有人来了'+req.url);
  res.setHeader('set-cookie','a=2');
  res.setHeader('set-cookie','bb=22');
  //res.cookie = querystring.parse(req.headers.cookie)      //{ a: '2; bb=22' }
  res.cookie = querystring.parse(req.headers.cookie,'; ') // 用这个 ; 切开,让它成为真正的 json { a: '2', bb: '22' }
  console.log(res.cookie.bb) // 22

  res.end('over');
}).listen(8081);

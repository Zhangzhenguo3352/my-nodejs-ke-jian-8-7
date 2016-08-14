# my-nodejs-ke-jian-8-7
```
// 这个页面 讲解了 文件夹包含了几个文件，就显示几个数组
//  fs.readdir('文件及路径'，fcDb(第一个是错误才会执行的方法,第二个是))
var fs = require('fs');

fs.readdir('a',function(err,data){
  console.log(data);
  // [ 'a.js', 'b.js' ]   这个 a 文件夹 包含了几个文件，就显示几个数组
});

```
```
// 这个页面 讲解了 文件操作 判断目录是否是文件夹，是返回true
// 文件相关信息  fs.stat('文件夹及路径 或 非文件夹及路径'，fcDb(err,data)
// data.isDirectory() 可以判断目录是否是文件夹，是返回true, 这个打印 data 是看不见的 ，要知道这么写就可以了，
const fs = require('fs');

// fs.stat('a',function(err,data){
//   console.log(data.isDirectory()) //true 文件夹 返回true
// })

fs.stat('index.html',function(err,data){
  console.log(data.isDirectory()) //false 不是文件夹 返回false
})

```
```

// 这个页面 对 两个方法进行了对比，结论
/*
querystring.parse()	解析普通有规律的字符串
		JSON.parse()		解析 '{"a":1, "b":2}'
*/
var querystring = require('querystring');

var str = 'aaa=111&bbb=222&ccc=333';

console.log('querystring', querystring.parse(str)) // { aaa: '111', bbb: '222', ccc: '333' }
console.log('JSON', JSON.parse(str));              // aaa=111&bbb=222&ccc=333 会报错

```
```
// 这个页面显示了 对于 json 数据 它们处理的不同结果
var querystring = require('querystring');

var json = {a:1,b:2,c:3};
console.log('querystring',querystring.stringify(json))  // a=1&b=2&c=3
console.log('JSON', JSON.stringify(json))               //{"a":1,"b":2,"c":3}

```
```
// 这个页面 通过 urlLib.parse(url,true) 打印出了 这个 url 百度路径详细的 参数
var urlLib = require('url');

var url='https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=s&rsv_pq=f84897f80004e683&rsv_t=d35eUqI2gmDSvTdIANUBwEsBQbxjpmiDhff%2FMWzfBN0dza8swXDIWfMX5lo&rqlang=cn&rsv_enter=1&rsv_sug3=2&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&inputT=405&rsv_sug4=406';

console.log(urlLib.parse(url,true))
/*
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com',
  port: null,
  hostname: 'www.baidu.com',
  hash: null,
  search: '?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=s&rsv_pq=f84897f80004e683&rsv_t=d35eUqI2gmDSvTdIANUBwEsBQbxjpmiDhff%2FMWzfBN0dza8swXDIWfMX5lo&rqlang=cn&rsv_enter=1&rsv_sug3=2&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&inputT=405&rsv_sug4=406',
  query:
   { ie: 'utf-8',
     f: '8',
     rsv_bp: '0',
     rsv_idx: '1',
     tn: 'baidu',
     wd: 's',
     rsv_pq: 'f84897f80004e683',
     rsv_t: 'd35eUqI2gmDSvTdIANUBwEsBQbxjpmiDhff/MWzfBN0dza8swXDIWfMX5lo',
     rqlang: 'cn',
     rsv_enter: '1',
     rsv_sug3: '2',
     rsv_sug1: '1',
     rsv_sug7: '100',
     rsv_sug2: '0',
     inputT: '405',
     rsv_sug4: '406' },
  pathname: '/s',
  path: '/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=s&rsv_pq=f84897f80004e683&rsv_t=d35eUqI2gmDSvTdIANUBwEsBQbxjpmiDhff%2FMWzfBN0dza8swXDIWfMX5lo&rqlang=cn&rsv_enter=1&rsv_sug3=2&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&inputT=405&rsv_sug4=406',
  href: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=s&rsv_pq=f84897f80004e683&rsv_t=d35eUqI2gmDSvTdIANUBwEsBQbxjpmiDhff%2FMWzfBN0dza8swXDIWfMX5lo&rqlang=cn&rsv_enter=1&rsv_sug3=2&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&inputT=405&rsv_sug4=406' }

*/

```

```

// 这个页面 讲解了 利用 urlLib.resolve(url,'最后的参数修改成什么') 修改掉了 最后的参数
const urlLib = require('url');

var url = 'http://www.baidu.com/one/th';
//         http://www.baidu.com/one/xxx

console.log(urlLib.resolve(url,'xxx')) // 修改 了最后的参数

```

```

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

```

```
```

```
```

```
```

```
```

```
```

```
```

```

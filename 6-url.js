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

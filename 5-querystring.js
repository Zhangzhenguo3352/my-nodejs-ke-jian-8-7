// 这个页面显示了 对于 json 数据 它们处理的不同结果
var querystring = require('querystring');

var json = {a:1,b:2,c:3};
console.log('querystring',querystring.stringify(json))  // a=1&b=2&c=3
console.log('JSON', JSON.stringify(json))               //{"a":1,"b":2,"c":3}

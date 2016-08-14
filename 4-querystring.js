
// 这个页面 对 两个方法进行了对比，结论
/*
querystring.parse()	解析普通有规律的字符串
		JSON.parse()		解析 '{"a":1, "b":2}'
*/
var querystring = require('querystring');

var str = 'aaa=111&bbb=222&ccc=333';

console.log('querystring', querystring.parse(str)) // { aaa: '111', bbb: '222', ccc: '333' }
console.log('JSON', JSON.parse(str));              // aaa=111&bbb=222&ccc=333 会报错

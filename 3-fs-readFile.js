// 这页讲解了 读取中的 字符串 数据转换 读取出来
// fs.readFile('path',fcDb(err,data))  读取文件内容
var fs = require('fs');
 fs.readFile('abc.data','utf-8',function(err,data){
   //var 字符串 = {"a":1}
   // JOSN.parse(字符串)                 字符串转换 json 数据
   // JSON.parse(data.toString())       { a: 1 }
   // JSON.parse(data.toString()).a     1
   console.log(JSON.parse(data.toString()).a)
 });

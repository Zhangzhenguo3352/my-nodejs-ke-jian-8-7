// 这个页面 讲解了 文件夹包含了几个文件，就显示几个数组
//  fs.readdir('文件及路径'，fcDb(第一个是错误才会执行的方法,第二个是))
var fs = require('fs');

fs.readdir('a',function(err,data){
  console.log(data);
  // [ 'a.js', 'b.js' ]   这个 a 文件夹 包含了几个文件，就显示几个数组
});

// 这个页面 使用 path.basename(str) 得到 当前路径     d
var path = require('path');
var str = 'a/b/c/d';
console.log(path.basename(str)) // 当前 路径 就是最后面的  d
//     d

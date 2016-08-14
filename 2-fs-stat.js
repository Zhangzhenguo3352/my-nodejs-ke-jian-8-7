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
